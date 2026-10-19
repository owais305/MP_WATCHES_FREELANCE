const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    amount: {
        type: Number, // In Rupees (INR)
        required: true
    },
    customerName: {
        type: String,
        required: true,
        trim: true
    },
    customerEmail: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    customerPhone: {
        type: String,
        required: true,
        trim: true
    },
    shippingAddress: {
        type: String,
        required: true,
        trim: true
    },
    paymentGateway: {
        type: String,
        required: true,
        enum: ['razorpay', 'local_upi'],
        default: 'local_upi'
    },
    razorpayOrderId: {
        type: String,
        sparse: true
    },
    razorpayPaymentId: {
        type: String,
        sparse: true
    },
    razorpaySignature: {
        type: String,
        sparse: true
    },
    utrNumber: {
        type: String, // Transaction ID/UTR for simulated manual UPI
        sparse: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'paid', 'shipped', 'failed'],
        default: 'pending'
    },
    trackingNumber: {
        type: String,
        default: ''
    },
    shippedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);
