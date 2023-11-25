<?php

include_once('assets/php/conexion.php');

//ID DE LA TABLA actividad
$id = $_GET['id'];

$query = "SELECT * FROM carros WHERE id = '$id';";
$rs = mysqli_query($conn, $query) or die(mysqli_error($conn));

if ($rs == true) {
    $row = mysqli_fetch_row($rs);
    //echo $row;
} else {
    $row = 'Error en la matrix';
    echo $row;
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar registro</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>

    <nav class="navbar shadow navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="assets/icar+.png" alt="Logo" width="30" height="36" class="d-inline-block align-text-top">
            iCar+ - Control de Inventario
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Menu Principal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="add.html">Agregar</a>
              </li>
            </ul>
          </div>

        </div>
    </nav>

    <div class='container'>
        <div class="card shadow ms-4 mt-4" style="width: 40rem;">
            <div class="card-body">
                <form id="activity-edit">
                    <div class="my-3">
                        <label for="description" >Descripción:</label>
                        <input type="text" name="description" id="description" size="75" value="<?php echo $row[1] ?>" >
                    </div>
                    <div class="mb-3">
                        <label for="marca" >Marca:</label>
                        <input type="text" name="marca"  id="marca" size="75" value="<?php echo $row[2] ?>">
                    </div>
                    <div class="mb-3">
                        <label for="modelo" >Modelo:</label>
                        <input type="text" name="modelo" id="modelo" size="75" value="<?php echo $row[3] ?>">
                    </div>
                    <div class="mb-3">
                        <label for="tipo" >Tipo:</label>
                        <input type="text" name="tipo" id="tipo" size="75" value="<?php echo $row[4] ?>">
                    </div>
                    <div class="mb-3">
                        <label for="ano" >Año:</label>
                        <input type="number" name="ano" id="ano" min="0" max="9999" value="<?php echo $row[5] ?>">
                    </div>
                    <div class="mb-3">
                        <label for="imagen" >URL Imagen:</label>
                        <input type="text" name="imagen" id="imagen" size="75" maxlength="2000" value="<?php echo $row[6] ?>">
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit" >Guardar</button>
                        <button class="btn btn-secondary" type="reset" >Volver a lo predeterminado</button>
                        <!-- <input class="form-control" type="submit" name=""> -->
                    </div>

                    <input type="hidden" name="id" id="id" value="<?php echo $row[0] ?>">
                    
                </form>
                <div id="resp"></div>
            </div>
        </div>
        
    </div>

    <!-- Script para manejar las operaciones con AJAX -->
    <script src="index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script>
        document.getElementById('activity-edit').addEventListener('submit', modact);
    </script>

</body>

</html>