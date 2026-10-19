require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoutes');

// Initialize server
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Setup CORS configuration
// Allows local browser testing (file:///) and various local servers (Live Server, Vite dev, etc.)
app.use(cors({
    origin: '*', // In development, allow all origins for easy API access
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Admin-Passcode', 'x-admin-passcode']
}));

// Setup JSON parsing middleware
app.use(express.json());

// Mount payment and admin dashboard APIs
app.use('/api/payments', paymentRoutes);

// Server status endpoint
app.get('/', (req, res) => {
    const isRazorpayActive = !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
    res.status(200).json({
        success: true,
        message: 'MPWATCHHUB E-Commerce Purchase Server is running!',
        database: 'Connected',
        gatewayMode: isRazorpayActive ? 'razorpay_active' : 'local_upi_simulation'
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Server Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error occurred.',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start listening
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`  MPWATCHHUB API Server listening on port ${PORT}`);
    console.log(`  Active environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`  Local status checks: http://localhost:${PORT}`);
    console.log(`==================================================`);
});
