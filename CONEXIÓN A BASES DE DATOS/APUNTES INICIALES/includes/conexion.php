<?php

    $host = "localhost";
    $usuario = "root";
    $password = "";
    $dbname = "ejemplojs";

    try {
        $conexion = new PDO("mysql:host=$host; dbname=$dbname; charset = UTF8", $usuario, $password);
    } catch (PDOException $e) {
       echo "Error : ".$e->getMessage();
    }

?>