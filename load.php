<?php header("Access-Control-Allow-Origin: *");
 
$host = "localhost";
$dbname = "ewp";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_errno());
} 

$query = mysqli_query($conn, "select * from imgurtest");
$entries = mysqli_num_rows($query);
$data = mysqli_fetch_all($query);
if ($entries > 0){
    echo json_encode($data);
} else {
    echo json_encode("Retrieval Failed");
}

?>