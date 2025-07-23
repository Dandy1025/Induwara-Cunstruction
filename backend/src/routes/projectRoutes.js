const express = require('express');
const router = express.Router();
const {
    createProject,
    getAllProjects,
    getCustomerProjects,
    updateProjectStatus
} = require('../controllers/projectController');
const authenticateToken = require('../middleware/auth');

router.post('/projects', authenticateToken, createProject);
router.get('/projects', getAllProjects);
router.get('/projects/my', authenticateToken, getCustomerProjects);
router.put('/projects/:id/status', updateProjectStatus);

module.exports = router;