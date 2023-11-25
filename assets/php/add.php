<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json; charset=utf-8');

include_once('conexion.php');

    $description;
    $imagen;
    $marca;
    $modelo;
    $tipo;
    $ano;

if (isset($_POST['description']) && isset($_POST['imagen']) && isset($_POST['marca']) && isset($_POST['modelo']) && isset($_POST['tipo']) && isset($_POST['ano']) ){
    // echo "si existo";    
    
        $description = $_POST['description'];
        $imagen = $_POST['imagen'];
        $marca = $_POST['marca'];
        $modelo = $_POST['modelo'];
        $tipo = $_POST['tipo'];
        $ano = $_POST['ano'];

        $query = "INSERT INTO carros(descripcion, marca, modelo, tipo, ano, imagen) VALUES ('$description', '$marca', '$modelo', '$tipo', '$ano' , '$imagen');";
        $rs = mysqli_query($conn, $query) or die(mysqli_error($conn));

        if ($rs == true) {
            echo "SUCCESSFUL POST";

        } else {
            echo "ERROR";
        }

} else{
    echo "error";
}

        


mysqli_close($conn);
?>