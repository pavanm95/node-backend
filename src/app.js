const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const initRoutes = require('./routes/initRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', initRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);

// Error Middleware
app.use(errorHandler);

module.exports = app;