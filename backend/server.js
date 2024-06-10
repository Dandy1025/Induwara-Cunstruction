const express = require('express');
const mysql = require('mysql');
const cors  = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"induwara_contruction_db"
})

app.get("/", (req, res) => {
    res.json("Hello World!");
})

app.listen(3000, () => {
    console.log("listening");
})