
let button = document.getElementById (`RegistroCompletado`)

    button.addEventListener("click",()=>{
    
    let usuario_mensaje = Validar_usuario()
    console.log(usuario_mensaje)
    let usuario_guardados = guardar_usuario()
    if (usuario_mensaje instanceof Usuario) {
        usuario_mensaje.NombreUsuario()
        usuario_guardados.push(usuario_mensaje)
        localStorage.setItem(key_usuario,JSON.stringify(usuario_guardados))
        alert("Se creo correcto wacho")
    
    } else {
        let formularioIncompleto = document.getElementById("formularioIncompleto")
        for (let index = 0; index < usuario_mensaje.length; index++) {
          let li = document.createElement(`li`)
          li.innerHTML = usuario_mensaje[index]
          formularioIncompleto.appendChild(li)
            
        }
    }
    
}
)



function guardar_usuario (){
    let i = JSON.parse(localStorage.getItem(key_usuario))
    if (i) {

       return i

    } else {
        i = new Array ()
        return i 
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

    let msj = new Array()
    let Nombre = document.getElementById(`Nombre`).value
    let apellido = document.getElementById(`Apellido`).value
    let contrasenia = document.getElementById(`Contrasenia`).value
    let contrasenia2 = document.getElementById(`Contrasenia2`).value
    let edad = document.getElementById(`Edad`).value
    let telefono = document.getElementById(`Telefono`).value
    //let formularioIncompleto = getElementById("formularioIncompleto")
    
    
    if (Nombre === "") {
        msj.push("Escribi tu nombre")
        
    }
    if (apellido === "") {
        msj.push("Escribi tu apellido")
        
    }
    if (contrasenia === "" || contrasenia < 5) {
        msj.push("Debes poner una contraseña con al menos 5 dijitos ")
        
    }
    if (contrasenia2 === "" || contrasenia2 != contrasenia) {
        msj.push("No confirmaste la contraseña o no son iguales")
        
    }
    if (edad < 0 || !edad) {
        msj.push("Debes poner una edad")
       
    }
    if (telefono === "") {
        msj.push("Debes colocar un telefono")
       
    }
    
    if (msj.length == 0) {
        return new Usuario(Nombre, apellido, contrasenia, edad, telefono)
    }else{
        return msj
    }
}


