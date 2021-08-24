<?php
require_once('config.php');
if (isset($_POST["type"]) && $_POST["type"] === "add") {
  $sql = "INSERT INTO login_register (username,mail,password) VALUES ('" . $_POST["username"] . "','" . $_POST["mail"] . "','" . $_POST["password"] . "')";
  
  if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo json_encode(['id' => $last_id]);
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}
if (isset($_POST["type"]) && $_POST["type"] === "login") {
  $username=$_POST['username'];
  $password=$_POST['password'];
$sql1 = "SELECT * FROM login_register WHERE username='$username' AND password='$password'";
$result = $conn->query($sql1);

if ($result->num_rows > 0) {
  
  
  // output data of each row
  $row = $result->fetch_assoc() ;
  $_SESSION ['userid'] = $row['id'];
  
    echo "basarili";
  
} else {
  echo "yanis bilgi";
}
$conn->close();

}



?>
