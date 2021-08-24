<?php
// error_reporting(0);

// $sName = "localhost";
// $uName = "root";
// $pass = "";
// $db_name = "tododb";
require_once('config.php');
// print_r($_POST["text"]);

// try {
//     $conn = new PDO("mysql:host=$sName;dbname=$db_name", 
//                     $uName, $pass);
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//     echo "connected!";
// }catch(PDOException $e){
//   echo "Connection failed : ". $e->getMessage();
// }

// $conn = mysqli_connect($sName, $uName, $pass, $db_name);

if (isset($_POST["type"]) && $_POST["type"] === "add") {
  $sql = "INSERT INTO todolist (text , options,kullanici_id)  VALUES ('" . $_POST["text"] . "' , '" . $_POST["options"] . "' , '" . $_POST["kullanici_id"] . "')";

  if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo json_encode(['id' => $last_id]);
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}


if (isset($_POST['type']) && $_POST['type'] === "delete") {
  $sql1 = "DELETE FROM todolist WHERE id = '" . $_POST['id'] . "'";
  if ($conn->query($sql1) !== TRUE) {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
  }
}


if(isset($_GET['type'])&&$_GET['type'] === "get"){
$sql3="SELECT id, (text), isComplated,options FROM todolist BETWEEN ";
$result   = mysqli_query($conn, $sql3);
$rows = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($rows);
}

if(isset($_POST['type'])&& $_POST['type'] ==="allclear"){
  $sql4 = "DELETE FROM todolist";
  if($conn->query($sql4) !== TRUE){
    echo "Error:" . $sql4 ."<br>" . $conn->error;
  }
}



if(isset($_POST['type']) && $_POST['type'] ==="edit"){
 
  $sql5 = "UPDATE todolist SET text = ('".$_POST['text']."') WHERE id='".$_POST['id']."' ";

  if ($conn->query($sql5) === TRUE) {
    echo "Record updated successfully";
  } else {
    echo "Error updating record: " . $conn->error;
  }
}


if ($conn->connect_error){
  die("Connection failed: " . $conn->connect_error);

}


?>








