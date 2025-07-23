const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign(
        { 
            id: user.id, 
            userType: user.userType, 
            role: user.role,
            email: user.email 
        }, 
        process.env.JWT_SECRET || 'secret1234', 
        { expiresIn: '24h' }
    );
};

// Register User
const registerUser = async (req, res) => {
    const { 
        userType, 
        fullName, 
        nic, 
        username, 
        email, 
        password, 
        contactNumber, 
        address, 
        profession, 
        experience, 
        storeBrand, 
        businessLicenseNumber 
    } = req.body;

    try {
        // Validate required fields
        if (!userType || !fullName || !username || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        let query;
        let values;
        let result;

        if (userType === 'customer') {
            // Check if customer already exists
            const [existing] = await db.execute(
                'SELECT * FROM customers WHERE useremail = ? OR username = ? OR nic = ?',
                [email, username, nic]
            );

            if (existing.length > 0) {
                return res.status(400).json({ error: 'User already exists with this email, username, or NIC' });
            }

            query = `INSERT INTO customers (fullname, nic, username, useremail, userpassword, contactnum, useraddress, role) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            values = [fullName, nic, username, email, hashedPassword, contactNumber, address, 'customer'];
            
        } else if (userType === 'employee') {
            // Check if employee already exists
            const [existing] = await db.execute(
                'SELECT * FROM employees WHERE e_email = ? OR e_username = ?',
                [email, username]
            );

            if (existing.length > 0) {
                return res.status(400).json({ error: 'Employee already exists with this email or username' });
            }

            query = `INSERT INTO employees (e_name, e_username, e_email, e_password, e_contact, e_address, e_profession, e_experience, role) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            values = [fullName, username, email, hashedPassword, contactNumber, address, profession, experience, 'employee'];
            
        } else if (userType === 'supplier') {
            // Check if supplier already exists
            const [existing] = await db.execute(
                'SELECT * FROM suppliers WHERE s_email = ? OR s_username = ? OR s_nic = ? OR s_blisencenum = ?',
                [email, username, nic, businessLicenseNumber]
            );

            if (existing.length > 0) {
                return res.status(400).json({ error: 'Supplier already exists with this email, username, NIC, or license number' });
            }

            query = `INSERT INTO suppliers (s_name, s_nic, s_username, s_email, s_password, s_contactnum, s_address, s_storebrand, s_blisencenum, role) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            values = [fullName, nic, username, email, hashedPassword, contactNumber, address, storeBrand, businessLicenseNumber, 'supplier'];
            
        } else {
            return res.status(400).json({ error: 'Invalid user type' });
        }

        [result] = await db.execute(query, values);
        
        res.status(201).json({ 
            message: 'User registered successfully!',
            userId: result.insertId 
        });

    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Internal server error during registration' });
    }
};

const loginUser = async (req, res) => {
    const { userType, email, password } = req.body;

    try {
        if (!userType || !email || !password) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        let query;
        let passwordField;
        let idField;

        if (userType === 'customer') {
            query = 'SELECT * FROM customers WHERE useremail = ?';
            passwordField = 'userpassword';
            idField = 'c_id';
        } else if (userType === 'employee') {
            query = 'SELECT * FROM employees WHERE e_email = ?';
            passwordField = 'e_password';
            idField = 'e_id';
        } else if (userType === 'supplier') {
            query = 'SELECT * FROM suppliers WHERE s_email = ?';
            passwordField = 's_password';
            idField = 's_id';
        } else {
            return res.status(400).json({ error: 'Invalid user type' });
        }

        const [results] = await db.execute(query, [email]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user[passwordField]);

        if (isPasswordValid) {
            const token = jwt.sign(
                { 
                    id: user[idField], 
                    userType, 
                    role: user.role,
                    email: email
                }, 
                process.env.JWT_SECRET || 'secret1234', 
                { expiresIn: '24h' }
            );
            
            return res.status(200).json({ 
                token,
                user: {
                    id: user[idField],
                    userType,
                    role: user.role,
                    email: email
                }
            });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal server error during login' });
    }
};

module.exports = {
    registerUser,
    loginUser
};