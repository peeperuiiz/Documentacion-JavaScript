<?php

    require_once("includes/conexion.php");
    $header = getallheaders();

    if(substr($header['Authorization'], 7) === "0123456789"){

        if (isset($_POST["titulo"], $_POST["texto"], $_POST["img"])) {
            $tituloCurso = $_POST["titulo"];
            $textoCurso = $_POST["texto"];
            $imgCurso = $_POST["img"];
    
            $consulta = "insert into cursos (titulo, texto, img) values (?,?,?)";
            $sentencia = $conexion->prepare($consulta);
            $sentencia->execute([$tituloCurso, $textoCurso, $imgCurso]);
    
            if($sentencia){
                echo json_encode("true");
            }
        }else{
            header("Location:index.html");
        }

    }else{

    }

?>