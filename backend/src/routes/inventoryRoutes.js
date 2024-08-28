// backend/routes/inventoryRoutes.js
const express = require('express');
const { getInventoryItems } = require('../controllers/inventoryController');
const router = express.Router();

router.get('/inventory', getInventoryItems);

module.exports = router;
