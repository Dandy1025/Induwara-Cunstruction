const express = require('express');
const { 
    getInventoryItems, 
    addInventoryItem, 
    updateInventoryItem, 
    deleteInventoryItem 
} = require('../controllers/inventoryController');
const router = express.Router();

router.get('/inventory', getInventoryItems);
router.post('/inventory', addInventoryItem);
router.put('/inventory/:id', updateInventoryItem);
router.delete('/inventory/:id', deleteInventoryItem);

module.exports = router;