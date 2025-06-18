const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const initRoutes = require('./routes/initRoutes');
const contentRoutes = require('./routes/contentRoutes');
const storyRoutes = require('./routes/storyRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: true }));

// Routes
app.use('/init', initRoutes);
app.use('/story', storyRoutes);
app.use('/category', categoryRoutes);
app.use('/content', contentRoutes);

// Error Middleware
app.use(errorHandler);

module.exports = app;