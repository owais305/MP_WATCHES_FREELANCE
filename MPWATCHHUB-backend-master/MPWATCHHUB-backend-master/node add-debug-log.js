const fs = require('fs');
const file = 'routes/paymentRoutes.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("    console.log('DEBUG_MARKER: create-order route HIT, body:', req.body);\n", '');
content = content.replace("        console.log('DEBUG_MARKER: CAUGHT ERROR ->', error);\n", '');

fs.writeFileSync(file, content, 'utf8');
console.log('Debug logs removed.');
