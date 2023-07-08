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

	$username = $_POST["uname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $cpassword = $_POST["cpassword"];
    $type=1;

    	echo "Reached php page!";
    	echo $username;
    
    // Check if the username already exists
  
    echo "Trying to insert!";
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $mysqli->prepare("INSERT INTO users (uname,email,password,type) VALUES (?,?,?,?)");
        $stmt->bind_param("ssss", $username, $email, $hashedPassword,$type);
        $stmt->execute();
        echo "Registration successful!";

    

    $stmt->close();
}

$mysqli->close();

?>