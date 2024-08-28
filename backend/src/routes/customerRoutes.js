const express = require('express');
const router = express.Router();
const { getCustomerData } = require('../controllers/customerController');
const authenticateToken = require('../middleware/auth');

router.get('/profile', authenticateToken, getCustomerData);

module.exports = router;
