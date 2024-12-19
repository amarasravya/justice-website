// index.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import connection from './db.js'; // Import the database connection

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML files for registration and login
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle user registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        await connection.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password]);
        res.send('User registered successfully!');
    } catch (err) {
        console.error("Error registering user: ", err);
        res.send('Registration failed. Please try again.');
    }
});

// Handle user login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);
        if (rows.length > 0) {
            res.send('Login successful! Welcome ' + username);
        } else {
            res.send('Invalid username or password.');
        }
    } catch (err) {
        console.error("Error logging in: ", err);
        res.send('Login failed. Please try again.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
