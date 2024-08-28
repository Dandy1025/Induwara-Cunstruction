// backend/app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('./config/db');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api', customerRoutes); // Add this line to use your customer routes
app.use('/api', inventoryRoutes);

module.exports = app;
