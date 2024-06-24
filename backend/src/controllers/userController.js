const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = (req, res) => {
    const { userType, fullName, nic, username, email, password, contactNumber, address, profession, experience, storeBrand, businessLicenseNumber } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    let query;
    let values;
    if (userType === 'customer') {
        query = 'INSERT INTO customers (fullname, nic, username, useremail, userpassword, contactnum, useraddress, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        values = [fullName, nic, username, email, hashedPassword, contactNumber, address, 'customer'];
    } else if (userType === 'employee') {
        query = 'INSERT INTO employees (e_name, e_username, e_email, e_password, e_contact, e_address, e_profession, e_experience, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        values = [fullName, username, email, hashedPassword, contactNumber, address, profession, experience, 'employee'];
    } else if (userType === 'supplier') {
        query = 'INSERT INTO suppliers (s_name, s_nic, s_username, s_email, s_password, s_contactnum, s_address, e_storebrand, e_blisencenum, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        values = [fullName, nic, username, email, hashedPassword, contactNumber, address, storeBrand, businessLicenseNumber, 'supplier'];
    } else {
        return res.status(400).json({ error: 'Invalid user type' });
    }

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err); // Log the error
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'User registered successfully!' });
        }
    });
};



const loginUser = (req, res) => {
    const { userType, email, password } = req.body;

    let query;
    if (userType === 'customer') {
        query = 'SELECT * FROM customers WHERE useremail = ?';
    } else if (userType === 'employee') {
        query = 'SELECT * FROM employees WHERE e_email = ?';
    } else if (userType === 'supplier') {
        query = 'SELECT * FROM suppliers WHERE s_email = ?';
    } else {
        return res.status(400).json({ error: 'Invalid user type' });
    }

    db.query(query, [email], (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else if (results.length === 0) {
            res.status(401).json({ message: 'Invalid email or password' });
        } else {
            const user = results[0];
            const isPasswordValid = bcrypt.compareSync(password, user[userType === 'customer' ? 'userpassword' : userType === 'employee' ? 'e_password' : 's_password']);
            if (isPasswordValid) {
                const token = jwt.sign({ id: user[userType === 'customer' ? 'c_id' : userType === 'employee' ? 'e_id' : 's_id'], userType, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        }
    });
};


module.exports = {
    registerUser,
    loginUser
};
