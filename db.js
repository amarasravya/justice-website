// db.js
import mysql from 'mysql2';

// Create a MySQL connection pool
const connection = mysql.createPool({
    host: 'localhost',
    port:3306,
    user: 'root',     // Replace with your MySQL username
    password: 'amarasravya799', // Replace with your MySQL password
    database: 'socialmedia' // Replace with your database name
}).promise();

export default connection;
