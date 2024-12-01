const url_json = "./carteraAlumnos.json"
let button = document.getElementById (`RegistroCompletado`)

    button.addEventListener("click",()=>{
    
    let usuario_mensaje = Validar_usuario()
    console.log(usuario_mensaje)
    let usuario_guardados = guardar_usuario(key_usuario)
    if (usuario_mensaje instanceof Usuario) {
        
        usuario_mensaje.NombreUsuario()
        usuario_guardados.push(usuario_mensaje)
        localStorage.setItem(key_usuario,JSON.stringify(usuario_guardados))
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario creado con exito",
            showConfirmButton: false,
            timer: 1500
        });

    
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




//let coleccion_profes = new Array();

const targetaProfe = async ()=>{
    const targetProfes = document.getElementById("targetProfes")
    const resp = await fetch (url_json)
    const data = await resp.json()

    data.profesores.forEach(profe =>{
        let newProfe = document.createElement("div")
        newProfe.classList.add("divProfes")
        newProfe.innerHTML = `
                        <img src=${profe.img} >
                        <h2>
                            ${profe.nombre}
                        </h2>
                        <h2>
                         usuario: ${profe.usuario}
                        </h2>
                            `
        targetProfes.appendChild(newProfe)
                        })
    
                        
} 

targetaProfe()