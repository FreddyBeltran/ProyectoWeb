<?php
require_once "db_connection.php";

if(isset($con)) {
    $userslist = $con->query("SELECT * FROM users");
    echo "<br/><br/>Connected to DB <br/><br/>";
    while($row=$userslist->fetch_assoc()){
        printf("Username: %s <br/>email: %s<br/><br/>", $row["username"], $row["email"]);
    }
} else {
    echo "Whoops";
}