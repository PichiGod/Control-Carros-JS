function postact(e){
    e.preventDefault();

    var description = document.getElementById('description').value;
    var imagen = document.getElementById('imagen').value;
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var tipo = document.getElementById('tipo').value;
    var ano = document.getElementById('ano').value;

    let params = `description=${description}&imagen=` + encodeURIComponent(imagen) + ` &marca=${marca}&modelo=${modelo}&tipo=${tipo}&ano=${ano}`;

    // let params = {
    //     description: description,
    //     days: days,
    //     start_date: start_date,
    //     end_date: end_date, 
    //     responsible: responsible
    // };

    console.log(params);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "assets/php/add.php", true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        
        console.log(this.responseText);
        info = document.getElementById('resp');
        info.innerHTML += `
            <div class="alert alert-info mt-2 ms-4" style="width: 30rem;" role="alert">
                ${this.responseText}
            </div>
        `
        //showact();
        //window.location.reload();
    }

    xhr.send(params);
}