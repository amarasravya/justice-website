<?php
// Database connection
$servername = "localhost";
$username = "root"; // Database username
$password = ""; // Database password
$dbname = "login"; // Database name

// Create connection
$conn = new mysqli_connect($servername, $username, $password, $dbname,3307);
if(!$conn)
{
    die("connection failed:".mysqli_connect_error());
}

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if (isset($_POST['save'])) { // Ensure 'save' matches the name attribute in the submit button
    // Retrieve form data using the correct form input names
    $state = $_POST['state']; // Correct: 'state' instead of 'State'
    $role = $_POST['role']; // Correct: 'role' instead of 'Role'
    $username = $_POST['username']; // Correct: 'username' instead of 'Username/email'
    $password = $_POST['password']; // Correct: 'password' instead of 'Password'
    $captcha = $_POST['captcha']; // Correct: 'captcha' instead of 'Captcha'
    

    // Check if any field is empty
    if (empty($state) || empty($role) || empty($username) || empty($password) || empty($captcha)) {
        echo "<script>alert('Please fill in all fields before logging in.');</script>";
    } else {
        // Prepare and bind the SQL query
        $stmt = $conn->prepare("SELECT password, captcha FROM users WHERE state = ? AND role = ? AND (username = ? OR email = ?)");
        $stmt->bind_param("ssss", $state, $role, $username, $username);

        // Execute the query
        $stmt->execute();
        $stmt->bind_result($stored_password, $stored_captcha);
        $stmt->fetch();

        // Check if user exists and captcha is correct
        if ($stored_password && $stored_captcha) {
            // Verify the password
            if (password_verify($password, $stored_password)) {
                // Verify the captcha
                if ($captcha === $stored_captcha) {
                    echo "<script>alert('Login Successfully!');</script>";
                } else {
                    echo "<script>alert('Incorrect Captcha. Please try again.');</script>";
                }
            } else {
                echo "<script>alert('Incorrect Password. Please try again.');</script>";
            }
        } else {
            echo "<script>alert('User not found. Please check your details.');</script>";
        }

        // Close the statement
        $stmt->close();
    }
}

// Close the database connection
$conn->close();
?>
