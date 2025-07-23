const db = require('../config/db');

// Function to fetch inventory items
const getInventoryItems = async (req, res) => {
    try {
        const query = `
            SELECT 
                item_id AS id, 
                item_name AS name, 
                image_path AS image, 
                price,
                stock_quantity,
                category,
                description
            FROM items 
            WHERE stock_quantity > 0
            ORDER BY item_name ASC
        `;

        const [results] = await db.execute(query);
        
        console.log('Fetched inventory items:', results.length);
        res.json(results);

    } catch (error) {
        console.error('Error fetching inventory items:', error);
        res.status(500).json({ error: 'Failed to fetch inventory items.' });
    }
};

// Function to add new inventory item
const addInventoryItem = async (req, res) => {
    try {
        const { item_name, price, stock_quantity, category, description, image_path } = req.body;

        if (!item_name || !price) {
            return res.status(400).json({ error: 'Item name and price are required' });
        }

        const query = `
            INSERT INTO items (item_name, price, stock_quantity, category, description, image_path)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            item_name,
            price,
            stock_quantity || 0,
            category || 'General',
            description || '',
            image_path || null
        ]);

        res.status(201).json({
            message: 'Item added successfully',
            itemId: result.insertId
        });

    } catch (error) {
        console.error('Error adding inventory item:', error);
        res.status(500).json({ error: 'Failed to add inventory item.' });
    }
};

// Function to update inventory item
const updateInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { item_name, price, stock_quantity, category, description } = req.body;

        const query = `
            UPDATE items 
            SET item_name = ?, price = ?, stock_quantity = ?, category = ?, description = ?
            WHERE item_id = ?
        `;

        const [result] = await db.execute(query, [
            item_name,
            price,
            stock_quantity,
            category,
            description,
            id
        ]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json({ message: 'Item updated successfully' });

    } catch (error) {
        console.error('Error updating inventory item:', error);
        res.status(500).json({ error: 'Failed to update inventory item.' });
    }
};

// Function to delete inventory item
const deleteInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.execute('DELETE FROM items WHERE item_id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json({ message: 'Item deleted successfully' });

    } catch (error) {
        console.error('Error deleting inventory item:', error);
        res.status(500).json({ error: 'Failed to delete inventory item.' });
    }
};

module.exports = { 
    getInventoryItems,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem
};