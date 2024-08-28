// backend/controllers/inventoryController.js
const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Function to fetch inventory items
const getInventoryItems = (req, res) => {
    const query = 'SELECT item_id AS id, item_name AS name, image_path AS image, price FROM items';

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching inventory items:', error);
            res.status(500).json({ error: 'Failed to fetch inventory items.' });
            return;
        }
        console.log('Fetched inventory items:', results); // Log the results
        res.json(results);
    });
};

module.exports = { getInventoryItems };
