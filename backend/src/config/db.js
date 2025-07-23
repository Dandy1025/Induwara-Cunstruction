const mysql = require('mysql2/promise');
require('dotenv').config();

// Create connection pool for better performance
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'induwara_contruction_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    acquireTimeout: 60000,
    timeout: 60000,
    reconnect: true
});

// Test connection
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connected to MySQL database successfully');
        connection.release();
        return true;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        return false;
    }
};

// Initialize database tables
const initializeDatabase = async () => {
    try {
        const connection = await pool.getConnection();
        
        // Create customers table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS customers (
                c_id INT AUTO_INCREMENT PRIMARY KEY,
                fullname VARCHAR(255) NOT NULL,
                nic VARCHAR(12) UNIQUE NOT NULL,
                username VARCHAR(100) UNIQUE NOT NULL,
                useremail VARCHAR(255) UNIQUE NOT NULL,
                userpassword VARCHAR(255) NOT NULL,
                contactnum VARCHAR(15) NOT NULL,
                useraddress TEXT NOT NULL,
                role ENUM('customer') DEFAULT 'customer',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create employees table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS employees (
                e_id INT AUTO_INCREMENT PRIMARY KEY,
                e_name VARCHAR(255) NOT NULL,
                e_username VARCHAR(100) UNIQUE NOT NULL,
                e_email VARCHAR(255) UNIQUE NOT NULL,
                e_password VARCHAR(255) NOT NULL,
                e_contact VARCHAR(15) NOT NULL,
                e_address TEXT NOT NULL,
                e_profession VARCHAR(100) NOT NULL,
                e_experience VARCHAR(100) NOT NULL,
                role ENUM('employee') DEFAULT 'employee',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create suppliers table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS suppliers (
                s_id INT AUTO_INCREMENT PRIMARY KEY,
                s_name VARCHAR(255) NOT NULL,
                s_nic VARCHAR(12) UNIQUE NOT NULL,
                s_username VARCHAR(100) UNIQUE NOT NULL,
                s_email VARCHAR(255) UNIQUE NOT NULL,
                s_password VARCHAR(255) NOT NULL,
                s_contactnum VARCHAR(15) NOT NULL,
                s_address TEXT NOT NULL,
                s_storebrand VARCHAR(255) NOT NULL,
                s_blisencenum VARCHAR(100) UNIQUE NOT NULL,
                role ENUM('supplier') DEFAULT 'supplier',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create items table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS items (
                item_id INT AUTO_INCREMENT PRIMARY KEY,
                item_name VARCHAR(255) NOT NULL,
                image_path VARCHAR(255),
                price DECIMAL(10, 2) NOT NULL,
                stock_quantity INT DEFAULT 0,
                category VARCHAR(100),
                description TEXT,
                supplier_id INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (supplier_id) REFERENCES suppliers(s_id) ON DELETE SET NULL
            )
        `);

        // Create projects table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS projects (
                project_id INT AUTO_INCREMENT PRIMARY KEY,
                project_name VARCHAR(255) NOT NULL,
                description TEXT,
                start_date DATE,
                end_date DATE,
                customer_id INT NOT NULL,
                status ENUM('pending', 'ongoing', 'completed', 'cancelled') DEFAULT 'pending',
                budget DECIMAL(12, 2),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (customer_id) REFERENCES customers(c_id) ON DELETE CASCADE
            )
        `);

        // Insert sample items if table is empty
        const [rows] = await connection.execute('SELECT COUNT(*) as count FROM items');
        if (rows[0].count === 0) {
            await connection.execute(`
                INSERT INTO items (item_name, image_path, price, stock_quantity, category, description) VALUES
                ('Bosch Drill', 'Drill.jpg', 1500.00, 50, 'Tools', 'Professional grade drill for construction work'),
                ('Electric Jackhammer', 'Jackhammer.jpg', 2000.00, 25, 'Equipment', 'Heavy duty jackhammer for demolition'),
                ('Lanva Cement', 'Cement.png', 2200.00, 100, 'Materials', 'High quality cement for construction')
            `);
        }

        connection.release();
        console.log('✅ Database tables initialized successfully');
    } catch (error) {
        console.error('❌ Database initialization failed:', error.message);
    }
};

// Initialize on startup
testConnection().then(success => {
    if (success) {
        initializeDatabase();
    }
});

module.exports = pool;