<?php
$con = mysqli_connect("localhost","jesus","_fd5ev/\$nAR7vMc","webdev1");
$usuario = $_GET['usuario'];
    if(isset($con)){
        $query="SELECT * FROM users WHERE id_user=$usuario";
        $userslist=$con->query($query);
        $ulist = $userslist-> fetch_assoc();
        //printf("\t<tr><td>%s</td> <td>%s</td></tr>\n", $row["username"], $row["email"]);
        echo json_encode($ulist);

    }else{
        echo "error";
    }
?>