<?php
require_once "db_connection.php";
$id = $_GET["id"];

if(isset($con)) {
    $user = $con->query("SELECT * FROM `users` WHERE id_user= ?", $id);
    while($row=$user->fetch_assoc()){
        printf("Username: %s <br/>email: %s<br/><br/>", $row["username"], $row["email"]);
    }
} else {
    echo "Whoops";
}