<?php
echo("Received");
$folderPath = 'uploads'; // Specify the folder path
$musicFiles = [];

// Get all files in the folder
$files = scandir($folderPath);

foreach ($files as $file) {
  // Filter out directories and non-music files (customize as per your requirements)
  if (!is_dir($folderPath . '/' . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'mp3') {
    $musicFiles[] = $file;
  }
}
echo($musicFiles);

// Convert the array to JSON and send it as the response
header('Content-Type: application/json');
echo json_encode($musicFiles);
?>
