const jwt = require('jsonwebtoken');
const db = require('../config/db');

const getCustomerData = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret1234');
        
        const userId = decoded.id;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        const [rows] = await db.execute('SELECT * FROM customers WHERE c_id = ?', [userId]);

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Remove password from response
        const customer = rows[0];
        delete customer.userpassword;

        return res.status(200).json(customer);

    } catch (error) {
        console.error('Error fetching customer data:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateCustomerData = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret1234');
        
        const userId = decoded.id;
        const { fullname, contactnum, useraddress } = req.body;

        const [result] = await db.execute(
            'UPDATE customers SET fullname = ?, contactnum = ?, useraddress = ? WHERE c_id = ?',
            [fullname, contactnum, useraddress, userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json({ message: 'Profile updated successfully' });

    } catch (error) {
        console.error('Error updating customer data:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { 
    getCustomerData,
    updateCustomerData 
};