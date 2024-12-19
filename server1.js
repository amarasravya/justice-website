const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // Your MySQL server host
    user: 'your_username', // Your MySQL username
    password: 'your_password', // Your MySQL password
    database: 'legal_db' // Your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
});

// POST endpoint to submit a pleading
app.post('/api/pleadings', (req, res) => {
    const { partyName, caseNumber, courtName, pleadingDate, pleadingContent } = req.body;

    // SQL query to insert the pleading data into the database
    const sql = 'INSERT INTO pleadings (partyName, caseNumber, courtName, pleadingDate, pleadingContent) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [partyName, caseNumber, courtName, pleadingDate, pleadingContent], (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Error inserting data', error });
        }
        res.status(201).json({ message: 'Pleading submitted successfully', pleadingId: results.insertId });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
