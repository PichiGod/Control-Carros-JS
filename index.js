
const activityList = document.getElementById("registros");

function showact(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/php/show.php', true);

    xhr.onload = function(){
        if (this.status == 200){
            var activity = JSON.parse(this.responseText);

            activityList.innerHTML = '';

            for(var i in activity){
                
                const activityItem = document.createElement('div');
                activityItem.innerHTML = `

                <div class="card flex-row flex-wrap me-4 my-4">
                    <div class="card-header border-0">
                        <img src="` + activity[i].imagen + `"class="mt-4 " alt="..." style="width: 200px; height: 200px;"/>
                    </div>
                    <div class="card-block px-4">
                        <h5 class="card-title mt-4"> ` + activity[i].descripcion + `</h5>
                        <p class="card-text"> Marca: `+ activity[i].marca + `</p>
                        <p class="card-text">Modelo: ` + activity[i].modelo + `</p>
                        <p class="card-text">Tipo: `+ activity[i].tipo +`</p>
                        <p class="card-text">Año: `+ activity[i].ano +`</p>
                        <a href="editar.php?id=`+ activity[i].id +`" class="btn btn-primary mb-4">Editar</a>
                        <button id="delete${activity[i].id}" name='delete' onclick='return deleteact(${activity[i].id})' value=`+ activity[i].id +` class="btn btn-secondary mb-4">Borrar</button>
                        <input type="hidden" name="id" id="id" value=`+ activity[i].id +`>
                        </div>
                    <div class="w-100"></div>
                </div>
                `;
                activityList.appendChild(activityItem);
                //document.getElementById(`delete${activity[i].id}`).addEventListener('click', deleteact);
            }
            

            //document.getElementById('activity-list').innerHTML = activityItem;
        }else if(this.status == 404){
            console.log("No existe la peticion");
        
        }else{
            activityList.innerHTML = '';
            const activityItem = document.createElement('div');
            activityItem.innerHTML = "Error en la recoleccion de datos";

            activityList.appendChild(activityItem);
            
            console.log('Error en la petición AJAX');
        }
    };

    xhr.send();

}

showact();

function postact(e){
    e.preventDefault();

    var description = document.getElementById('description').value;
    var imagen = document.getElementById('imagen').value;
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var tipo = document.getElementById('tipo').value;
    var ano = document.getElementById('ano').value;

    let params = `description=${description}&imagen=${imagen}&marca=${marca}&modelo=${modelo}&tipo=${tipo}&ano=${ano}`;

    // let params = {
    //     description: description,
    //     days: days,
    //     start_date: start_date,
    //     end_date: end_date, 
    //     responsible: responsible
    // };

    console.log(params);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/add.php", true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        
        console.log(this.responseText);
        showact();
        window.location.reload();
    }

    xhr.send(params);
}

function modact(e){
    e.preventDefault();
    const resp = document.getElementById('resp');

    var id = document.getElementById('id').value;
    var description = document.getElementById('description').value;
    var imagen = document.getElementById('imagen').value;
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var tipo = document.getElementById('tipo').value;
    var ano = document.getElementById('ano').value;

    let params = `id=${id}&description=${description}&imagen=${imagen}&marca=${marca}&modelo=${modelo}&tipo=${tipo}&ano=${ano}`;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "assets/php/edit.php", true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function(){
        console.log(this.responseText);
        resp.innerHTML = `<div class="alert alert-info mt-2 ms-4" style="width: 30rem;" role="alert">
                                ${this.responseText}
                          </div>`;
        
    }

    xhr.send(params);
}

function del(e){
        e.preventDefault();
    }

function deleteact(fid){

    var id = document.getElementById('id').value;
    console.log(fid);

    if(confirm("Seguro que quieres eliminar este registro?") == true){
        del;
        let params = `id=${id}`;

        var xhr = new XMLHttpRequest();
        xhr.open("DELETE",`assets/php/delete.php?id=${fid}`,true);
        xhr.setRequestHeader('Access-Control-Allow-origin', '*');
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.setRequestHeader('Access-Control-Allow-Methods','GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS');
        xhr.onload= function(){
            if (this.status == 200){
                console.log(this.responseText);
                showact();
                //window.location.reload();
            }else {
                console.log('ERROR: EN LA BORRO DE DATOS')
            }
            
        }

        xhr.send(params);

    }else{
        alert('Cancelado.');
    }

}
