const jwt = require('jsonwebtoken');
const db = require('../config/db');

const getCustomerData = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    console.log('User ID:', userId);

    try {
        const result = db.query('SELECT * FROM customers WHERE c_id = ?', [userId]);
    
        if (Array.isArray(result) && result.length > 0) {
            const [rows] = result;
    
            if (!rows || rows.length === 0) {
                return res.status(404).json({ message: 'Customer not found' });
            }
    
            return res.status(200).json(rows[0]);
        } else {
            return res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

module.exports = { getCustomerData };
