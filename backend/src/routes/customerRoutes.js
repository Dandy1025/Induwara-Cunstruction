const express = require('express');
const router = express.Router();
const { getCustomerData, updateCustomerData } = require('../controllers/customerController');
const authenticateToken = require('../middleware/auth');

router.get('/profile', authenticateToken, getCustomerData);
router.put('/profile', authenticateToken, updateCustomerData);

module.exports = router;