const key_usuario = "key_usuario"

let button = document.getElementById (`RegistroCompletado`)

button.addEventListener("click",()=>{
    let Nombre = document.getElementById(`Nombre`).value
    let apellido = document.getElementById(`Apellido`).value
    let contrasenia = document.getElementById(`Contrasenia`).value
    let contrasenia2 = document.getElementById(`Contrasenia2`).value
    let edad = document.getElementById(`Edad`).value
    let telefono = document.getElementById(`Telefono`).value
    let user = encontrar_usuario(Nombre, apellido, contrasenia, contrasenia2, edad, telefono)
    let msj = Validar_usuario(Nombre, apellido,contrasenia,contrasenia2,edad,telefono)
    

    if (user) {
        alert("hola")
    } else {
        alert("chau")
    }
    if (msj == " ") {
        let nuevo_usuario = new Usuario(Nombre, apellido, contrasenia, contrasenia2, edad, telefono)
        guardar_usuario(nuevo_usuario)
        alert("creado")

    

    let msj = new Array
    if(msj.length == 0 ){
        let usuario = new Usuario(Nombre, apellido, contrasenia, edad, telefono)

    }else{
        for (let index = 0; index < usuario.length; index++) {
            
            
        }

    }
}












function guardar_usuario (usuarios){
    let i = localStorage.getItem(key_usuario)
    if (i) {
        let alumnos = JSON.parse(localStorage.getItem(key_usuario))
        alumnos.push(usuarios)
        localStorage.setItem(key_usuario,alumnos)

    } else {
        let alumnos = new Array()
        alumnos.push(usuarios)
        let coleccion = JSON.stringify(alumnos)
        localStorage.setItem(key_usuario,coleccion)
        alert("usuario guardado")
    }
}


function encontrar_usuario(usuarios) {
    if (!localStorage.getItem(key_usuario)) {
        return false
        
    }

    let estaOno = JSON.parse(localStorage.getItem(key_usuario))
    let esta = false
    let i = 0

    while (!esta && i != estaOno.length) {
        if (estaOno[i].nombre == usuarios) {
            
        }
    }
}









function Validar_usuario() {
    let msj = new Array
    let Nombre = document.getElementById(`Nombre`).value
    let apellido = document.getElementById(`Apellido`).value
    let contrasenia = document.getElementById(`Contrasenia`).value
    let contrasenia2 = document.getElementById(`Contrasenia2`).value
    let edad = document.getElementById(`Edad`).value
    let telefono = document.getElementById(`Telefono`).value
    //let formularioIncompleto = getElementById("formularioIncompleto")
    

    if (Nombre === "") {
        msj.push("Escribi tu nombre")
        alert ("error nombre")
    }
    if (apellido === "") {
        msj.push("Escribi tu apellido")
        alert("error apellido")
    }
    if (contrasenia === "" || contrasenia < 5) {
        msj.push("Debes poner una contraseña con al menos 5 dijitos ")
        alert("error contra")
    }
    if (contrasenia2 === "" || contrasenia2 != contrasenia) {
        msj.push("No confirmaste la contraseña o no son iguales")
        alert("error contra")
    }
    if (edad < 0 || !edad) {
        msj.push("Debes poner una edad")
        alert("error edad")
    }
    if (telefono === "") {
        msj.push("Debes colocar un telefono")
        alert("error num")
    }
    return msj 

}