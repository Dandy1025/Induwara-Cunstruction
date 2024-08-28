const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign({ id: user.id, userType: user.userType, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register User
const registerUser = async (req, res) => {
    const { userType, fullName, nic, username, email, password, contactNumber, address, profession, experience, storeBrand, businessLicenseNumber } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    let query;
    let values;
    try {
        if (userType === 'customer') {
            query = 'INSERT INTO customers (fullname, nic, username, useremail, userpassword, contactnum, useraddress, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            values = [fullName, nic, username, email, hashedPassword, contactNumber, address, 'customer'];
        } else if (userType === 'employee') {
            query = 'INSERT INTO employees (e_name, e_username, e_email, e_password, e_contact, e_address, e_profession, e_experience, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
            values = [fullName, username, email, hashedPassword, contactNumber, address, profession, experience, 'employee'];
        } else if (userType === 'supplier') {
            query = 'INSERT INTO suppliers (s_name, s_nic, s_username, s_email, s_password, s_contactnum, s_address, s_storebrand, s_blisencenum, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            values = [fullName, nic, username, email, hashedPassword, contactNumber, address, storeBrand, businessLicenseNumber, 'supplier'];
        } else {
            return res.status(400).json({ error: 'Invalid user type' });
        }

        await db.query(query, values);
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUser = (req, res) => {
    const { userType, email, password } = req.body;

    if (!userType || !email || !password) {
        console.log('Missing fields in request:', req.body);
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    let query;
    let passwordField;

    if (userType === 'customer') {
        query = 'SELECT * FROM customers WHERE useremail = ?';
        passwordField = 'userpassword';
    } else if (userType === 'employee') {
        query = 'SELECT * FROM employees WHERE e_email = ?';
        passwordField = 'e_password';
    } else if (userType === 'supplier') {
        query = 'SELECT * FROM suppliers WHERE s_email = ?';
        passwordField = 's_password';
    } else {
        console.log('Invalid user type:', userType);
        return res.status(400).json({ error: 'Invalid user type' });
    }

    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database error occurred' });
        }

        console.log('Database query results:', results);

        if (results.length === 0) {
            console.log('No user found with this email:', email);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        const isPasswordValid = bcrypt.compareSync(password, user[passwordField]);

        console.log('Password comparison result:', isPasswordValid);

        if (isPasswordValid) {
            const userIdField = userType === 'customer' ? 'c_id' : userType === 'employee' ? 'e_id' : 's_id';
            const token = jwt.sign({ id: user[userIdField], userType, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ token });
        } else {
            console.log('Invalid password for email:', email);
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    });
};

module.exports = {
    registerUser,
    loginUser
};
