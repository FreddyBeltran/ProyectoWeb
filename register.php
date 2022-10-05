<?php
require_once "db_connection.php";

var_dump($_GET);echo "<br/>";
var_dump($_POST);echo "<br/>";



if(isset($con)){
    $query = $con->query("INSERT INTO users (username, password, firstnames, lastnames, email) VALUES (
                        ".$_GET['username'].", 
                        ".$_GET['password'].", 
                        ".$_GET['firstnames'].", 
                        ".$_GET['lastnames'].", 
                        ".$_GET['email'].")");
    
    echo "Connected to DB <br/>";
    echo "<br/>";
    $userslist = $con->query("SELECT * FROM users");
    ?>
        <table>
        <tr>
            <th>Username</th>
            <th>Email</th>
        </tr>
        <?php
        while($row = $userslist->fetch_assoc()){
            printf("\t<tr><td>%s</td> <td>%s</td></tr>\n", $row["username"], $row["email"]);
        }
    ?>
    </table>
  <?php

} else{
    echo "Whoops";
}