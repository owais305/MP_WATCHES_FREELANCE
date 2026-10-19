const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const Order = require('../models/Order');

// Initialize Razorpay SDK if keys are provided
let Razorpay = null;
let razorpayInstance = null;

const keyId = process.env.RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

if (keyId && keySecret && keyId.trim() !== '' && keySecret.trim() !== '') {
    try {
        Razorpay = require('razorpay');
        razorpayInstance = new Razorpay({
            key_id: keyId,
            key_secret: keySecret
        });
        console.log('Razorpay Gateway Mode: Activated using configured API keys.');
    } catch (err) {
        console.error('Failed to initialize Razorpay Node SDK:', err.message);
    }
} else {
    console.log('Razorpay Gateway Mode: Disabled. Local UPI Simulation Mode will be used.');
}

// Load products catalog
let productsCatalog = [];
const productsJsonPath = path.join(__dirname, '..', 'data', 'products.json');
try {
    if (fs.existsSync(productsJsonPath)) {
        productsCatalog = JSON.parse(fs.readFileSync(productsJsonPath, 'utf8'));
        console.log(`Loaded ${productsCatalog.length} products into backend catalog.`);
    } else {
        console.error('Products catalog file not found in backend data folder.');
    }
} catch (err) {
    console.error('Error reading products.json catalog:', err.message);
}

// Middleware to verify admin passcode for secure dashboard endpoints
const verifyAdminPasscode = (req, res, next) => {
    const providedPasscode = req.headers['x-admin-passcode'] || req.query.passcode;
    const requiredPasscode = process.env.ADMIN_PASSCODE || 'admin123';
    
    if (providedPasscode === requiredPasscode) {
        next();
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized. Invalid admin passcode.' });
    }
};

/**
 * @route   POST /api/payments/create-order
 * @desc    Create a new transaction order (Razorpay Order or Mock Simulation Order)
 */
router.post('/create-order', async (req, res) => {
    const { productId, customerName, customerEmail, customerPhone, shippingAddress } = req.body;

    if (!productId || !customerName || !customerEmail || !customerPhone || !shippingAddress) {
        return res.status(400).json({ success: false, message: 'Please provide all required customer and product details.' });
    }

    try {
        // Find product in catalog
        const product = productsCatalog.find(p => p.id === parseInt(productId));
        if (!product) {
            return res.status(404).json({ success: false, message: `Product with ID ${productId} not found.` });
        }

        // Parse price (e.g. "₹1500" -> 1500)
        const itemPrice = parseInt(product.price.replace(/[^\d]/g, '')) || 0;
        if (itemPrice <= 0) {
            return res.status(400).json({ success: false, message: 'Invalid product price parsed on server.' });
        }

        const gatewayMode = razorpayInstance ? 'razorpay' : 'local_upi';
        let gatewayOrderId = '';

        if (gatewayMode === 'razorpay') {
            // Razorpay order creation (amount in paise: Rupees * 100)
            const options = {
                amount: itemPrice * 100, 
                currency: 'INR',
                receipt: `rcpt_prod_${product.id}_${Date.now().toString().slice(-6)}`
            };

            const razorpayOrder = await razorpayInstance.orders.create(options);
            gatewayOrderId = razorpayOrder.id;
        } else {
            // Simulated local order ID
            gatewayOrderId = `order_sim_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        }

        // Create new pending order in database
        const newOrder = new Order({
            productId: product.id,
            productName: product.name,
            productBrand: product.brand,
            productPrice: product.price,
            amount: itemPrice,
            customerName,
            customerEmail,
            customerPhone,
            shippingAddress,
            paymentGateway: gatewayMode,
            razorpayOrderId: gatewayMode === 'razorpay' ? gatewayOrderId : undefined,
            status: 'pending'
        });

        await newOrder.save();

        res.status(201).json({
            success: true,
            mode: gatewayMode,
            orderId: newOrder._id,
            gatewayOrderId,
            amount: itemPrice,
            keyId: gatewayMode === 'razorpay' ? process.env.RAZORPAY_KEY_ID : null,
            product: {
                name: product.name,
                brand: product.brand,
                price: product.price
            }
        });
    } catch (error) {
        console.error('Error creating purchase order:', error);
        res.status(500).json({ success: false, message: 'Failed to create order. Server error.', details: error.message });
    }
});

/**
 * @route   POST /api/payments/verify-payment
 * @desc    Verify signature (Razorpay) or log manual UTR (Simulation Mode) to mark as PAID
 */
router.post('/verify-payment', async (req, res) => {
    const { orderId, razorpayPaymentId, razorpaySignature, utrNumber, status } = req.body;

    if (!orderId) {
        return res.status(400).json({ success: false, message: 'Missing database Order ID.' });
    }

    try {
        // Find order in DB
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order record not found.' });
        }

        if (order.status !== 'pending') {
            return res.status(400).json({ success: false, message: `Order payment has already been processed. Current status: ${order.status}` });
        }

        if (order.paymentGateway === 'razorpay') {
            // Verify real Razorpay Signature
            if (!razorpayPaymentId || !razorpaySignature) {
                return res.status(400).json({ success: false, message: 'Missing Razorpay signature or payment details.' });
            }

            const text = order.razorpayOrderId + '|' + razorpayPaymentId;
            const generatedSignature = crypto
                .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                .update(text)
                .digest('hex');

            if (generatedSignature === razorpaySignature) {
                order.razorpayPaymentId = razorpayPaymentId;
                order.razorpaySignature = razorpaySignature;
                order.status = 'paid';
                await order.save();
                return res.status(200).json({ success: true, message: 'Payment verified and logged successfully via Razorpay.' });
            } else {
                order.status = 'failed';
                await order.save();
                return res.status(400).json({ success: false, message: 'Payment verification failed. Invalid signature.' });
            }
        } else {
            // Handle Simulated Manual UPI Mode
            if (status === 'success' || (utrNumber && utrNumber.trim() !== '')) {
                order.utrNumber = utrNumber || `SIM_UTR_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
                order.status = 'paid';
                await order.save();
                return res.status(200).json({ success: true, message: 'Payment simulated successfully. Order updated to PAID.', order });
            } else {
                order.status = 'failed';
                await order.save();
                return res.status(400).json({ success: false, message: 'Payment simulation aborted or marked as failed.' });
            }
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ success: false, message: 'Failed to verify payment. Server error.', details: error.message });
    }
});

/**
 * @route   GET /api/payments/orders
 * @desc    Get all processed orders (paid & shipped) - Admin only
 */
router.get('/orders', verifyAdminPasscode, async (req, res) => {
    try {
        // Retrieve orders that are paid or shipped, sorted by creation date
        const orders = await Order.find({ status: { $in: ['paid', 'shipped'] } }).sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: orders.length, orders });
    } catch (error) {
        console.error('Error fetching admin orders:', error);
        res.status(500).json({ success: false, message: 'Failed to retrieve orders.', details: error.message });
    }
});

/**
 * @route   POST /api/payments/orders/:id/ship
 * @desc    Mark an order as shipped (adds optional tracking code) - Admin only
 */
router.post('/orders/:id/ship', verifyAdminPasscode, async (req, res) => {
    const { id } = req.params;
    const { trackingNumber } = req.body;

    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order record not found.' });
        }

        if (order.status !== 'paid') {
            return res.status(400).json({ success: false, message: `Only PAID orders can be marked as shipped. Current status: ${order.status}` });
        }

        order.status = 'shipped';
        order.trackingNumber = trackingNumber || 'N/A';
        order.shippedAt = new Date();
        await order.save();

        res.status(200).json({ success: true, message: 'Order successfully marked as shipped!', order });
    } catch (error) {
        console.error('Error updating shipping status:', error);
        res.status(500).json({ success: false, message: 'Failed to update shipping status.', details: error.message });
    }
});

module.exports = router;
