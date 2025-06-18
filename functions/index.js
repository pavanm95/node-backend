const functions = require('firebase-functions');
const app = require('./src/app');
const connectDB = require('./src/config/db');

connectDB();

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}/api`);
// });

exports.api = functions.https.onRequest(app);
