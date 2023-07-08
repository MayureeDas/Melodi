<?php

// Database connection configuration
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "melodi";

// Create a new MySQLi instance
$mysqli = new mysqli($host, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Process signup form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$username = $_POST['uname'];
    $password = $_POST['password'];

    
    // Check if the username already exists
    $stmt = $mysqli->prepare("SELECT * FROM users WHERE uname = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            header("Location: spotify/index.html");
            echo '<script type="text/javascript">
       window.onload = function () { alert("Login successfull!"); }</script>';
            exit;
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "Invalid username.";
    }


}

$mysqli->close();

?>