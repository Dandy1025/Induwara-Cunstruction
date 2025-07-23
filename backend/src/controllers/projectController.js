const db = require('../config/db');
const jwt = require('jsonwebtoken');

// Create new project
const createProject = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret1234');
        
        if (decoded.userType !== 'customer') {
            return res.status(403).json({ message: 'Only customers can create projects' });
        }

        const { project_name, description, start_date, end_date, budget } = req.body;

        if (!project_name || !description) {
            return res.status(400).json({ error: 'Project name and description are required' });
        }

        const query = `
            INSERT INTO projects (project_name, description, start_date, end_date, customer_id, budget, status)
            VALUES (?, ?, ?, ?, ?, ?, 'pending')
        `;

        const [result] = await db.execute(query, [
            project_name,
            description,
            start_date || null,
            end_date || null,
            decoded.id,
            budget || null
        ]);

        res.status(201).json({
            message: 'Project created successfully',
            projectId: result.insertId
        });

    } catch (error) {
        console.error('Error creating project:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(500).json({ error: 'Failed to create project' });
    }
};

// Get all projects
const getAllProjects = async (req, res) => {
    try {
        const query = `
            SELECT 
                p.*,
                c.fullname as customer_name,
                c.useremail as customer_email,
                c.contactnum as customer_contact
            FROM projects p
            JOIN customers c ON p.customer_id = c.c_id
            ORDER BY p.created_at DESC
        `;

        const [results] = await db.execute(query);
        res.json(results);

    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

// Get projects by customer
const getCustomerProjects = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret1234');

        const query = `
            SELECT * FROM projects 
            WHERE customer_id = ?
            ORDER BY created_at DESC
        `;

        const [results] = await db.execute(query, [decoded.id]);
        res.json(results);

    } catch (error) {
        console.error('Error fetching customer projects:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

// Update project status
const updateProjectStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['pending', 'ongoing', 'completed', 'cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        const [result] = await db.execute(
            'UPDATE projects SET status = ? WHERE project_id = ?',
            [status, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.json({ message: 'Project status updated successfully' });

    } catch (error) {
        console.error('Error updating project status:', error);
        res.status(500).json({ error: 'Failed to update project status' });
    }
};

module.exports = {
    createProject,
    getAllProjects,
    getCustomerProjects,
    updateProjectStatus
};