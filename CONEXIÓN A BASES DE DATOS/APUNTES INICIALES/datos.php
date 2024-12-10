<?php

    require_once("includes/conexion.php");
    $consulta = "select * from cursos";
    $sentencia = $conexion->prepare($consulta);
    $sentencia->execute();
    $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($resultados);
    
?>