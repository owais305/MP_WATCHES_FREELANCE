const fs = require('fs');
const content = fs.readFileSync('routes/paymentRoutes.js', 'utf8');

console.log('File size:', content.length, 'chars');
console.log('Has console.error for order creation:', content.includes("console.error('Error creating purchase order"));
console.log('Has Razorpay orders.create call:', content.includes('razorpayInstance.orders.create'));

// Show the actual create-order route handler
const start = content.indexOf("router.post('/create-order'");
const end = content.indexOf("router.post('/verify-payment'");
console.log('\n--- create-order route handler ---\n');
console.log(content.slice(start, end));