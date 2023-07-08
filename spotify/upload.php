<?php
echo "File received!";
$fileToMove = $_FILES['mp3File'];
$sourcePath = $fileToMove['tmp_name'];
$targetpath="uploads/".$fileToMove['name'];
if(move_uploaded_file($sourcePath, $targetpath)){
    header("Location: index.html");
    exit;
}


?>
