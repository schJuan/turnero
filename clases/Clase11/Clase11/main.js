/*let car_brands = [];
car_brands[0] = 'Audi';
car_brands[1] = 'Bugatti';
car_brands[2] = 'BMW';
car_brands[3] = 'Ford';
car_brands[4] = 'Fiat';
car_brands[5] = 'Hyundai';
car_brands[6] = 'Lexus';
car_brands[7] = 'Peugeot';
car_brands[8] = 'Renault';
console.log(car_brands);

localStorage.setItem("marcas_autos",car_brands);*/

//clave de localstorage
const clave_usuarios = "listaUsuarios";


let resp = confirm("Ya estas registrado ?");
if (resp) {
//si el usario esta registrado
    let usuario = prompt("Ingrese su usuario");
    let user = buscar_usuario(usuario);

    if (user) {


        alert("Bienvenid@ " + user.nombre + " " + user.apellido);

    } else {

        alert("El usuario no existe")
    }
} else {
    let resp = confirm("Desea registrarse ?");
    if (resp) {
        //si el usuario quiere registrarse
        let user = prompt("Ingrese usuario");
        let nombre = prompt("Ingrese nombre");
        let apellido = prompt("Ingrese apellido");
        let edad = prompt("Ingrese edad");

        //se valida si involucro toda la data
        let msj = checkear_datos(user, nombre, apellido, edad);

        if (msj == "") {

            //creo un nuevo usuario
            let usuario_nuevo = new Usuario(user,nombre,apellido,edad);

            //lo guardo en localstorage
            guardar_usuario(usuario_nuevo);

            
        }else{

            alert(msj)
        }



    }

}



function buscar_usuario(user) {


    if (!localStorage.getItem(clave_usuarios)) {

        return false;
    }


    let almacenados = JSON.parse(localStorage.getItem(clave_usuarios));
    let encontrado = false;
    let i = 0;

    while (!encontrado && i != almacenados.length) {

        if (almacenados[i].usuario == user) {

             encontrado = almacenados[i];
            //encontrado = new Usuario(almacenados[i])
        }

        i++;


    }


    return encontrado;




}

function checkear_datos(user, nombre, apellido, edad) {

    let msj = "";

    if ((user) && (nombre) && (apellido) && (edad)) {

        if (isNaN(parseInt(edad))){

            msj = "No ingresaste un numero en edad";
        }



    } else {

        msj = "Debes ingresar todos los datos. ";


    }

    return msj ;


}

function guardar_usuario(usuario){

    let item = localStorage.getItem(clave_usuarios);

    if (item){
        //actualizo la coleccion guardada.

        let almacenados = JSON.parse(localStorage.getItem(clave_usuarios));
        almacenados.push(usuario);

        let coleccion = JSON.stringify(almacenados);
        localStorage.setItem(clave_usuarios,coleccion);


    }else{

        //almaceno la primera vez
        let almacenados = new Array();
        almacenados.push(usuario);

        let coleccion = JSON.stringify(almacenados);
        localStorage.setItem(clave_usuarios,coleccion);


    }


}

