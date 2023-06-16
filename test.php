<?php
// Retrieve form data
$name = $_POST['username'];
$email = $_POST['password'];

// Format the data
$data = "Name: $name\nEmail: $email\n\n";

// Specify the file path
$file = 'username.txt';

// Open the file in append mode
$fileHandle = fopen($file, 'a');

// Write the data to the file
if ($fileHandle) {
    fwrite($fileHandle, $data);
    fclose($fileHandle);
    echo "Data has been written to the file.";
} else {
    echo "Unable to open the file.";
}

?>
