<?php

    require_once("includes/conexion.php");

    if (isset($_POST["titulo"], $_POST["texto"], $_POST["img"])) {
        $tituloCurso = $_POST["titulo"];
        $textoCurso = $_POST["texto"];
        $imgCurso = $_POST["img"];

        $consulta = "insert into cursos (titulo, texto, img) values (?,?,?)";
        $sentencia = $conexion->prepare($consulta);
        $sentencia->execute([$tituloCurso, $textoCurso, $imgCurso]);
    }else{
        header("Location:index.html");
    }

?>