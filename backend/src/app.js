const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('./config/db'); // Ensure the database connection is established

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.use('/api/users', userRoutes);

module.exports = app;
