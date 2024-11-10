let incio_sesion = new Array()

let input_boton = document.getElementById("inicioSesion")
input_boton.addEventListener("click",()=>{
    let profe =false
    let input_usuario = document.getElementById("usuario").value
    let input_contrasenia = document.getElementById("contrasenia").value
    input_boton.classList.add(`button_inicio`) 
    if (input_usuario && input_contrasenia != ""){
        for (let i = 0; i < usuarios_profes.length; i++) {
            if (input_usuario === usuarios_profes[i].nombre) {
                profe = true
                input_usuario.push(usuarios_profes)
            }
           
        }
        for (let i = 0; i < input_usuario.length; i++) {
            incio_sesion.push(input_usuario)
                
        } 
            alert("hola profe")
            
            console.log(input_usuario)
            alert("Hola mortal")
        
    }else{
        alert("ingresa un usuario")
    }
    document.getElementById("usuario").value = ""
    document.getElementById("contrasenia").value = ""
})



class Profesores {
    constructor( usuario_l, contrasenia) {
       
        this.usuario_l = usuario_l
        this.contrasenia = contrasenia
    }
}

let profe1 = new Profesores("Fcatelott", "contraseña123");
let profe2 = new Profesores("Tcatelott", "contraseña321");
const usuarios_profes = [profe1, profe2,]





let turno8 = []

let reservar = document.getElementById ("reservar")
let crearUser = document.getElementById("crearUser");
let cerrarSesion = document.getElementById("cerrarSesion")


cerrarSesion.addEventListener("click", ()=>{
    
    input_boton.classList.remove(`button_inicio`)
    incio_sesion = []
})



function averiguarUsuario(){
    let variable = 0
    for (let index = 0; index < turno8.length; index++) {
        if (turno8[index] === incio_sesion[0]) {
             variable++
            
        }
        
    }
    return variable
}


reservar.addEventListener('click', crearUsuario)


function crearUsuario() {
    let falso = averiguarUsuario()
    if (falso === 0 && !undefined ){
       
        turno8.push(incio_sesion[0])
    }
    crearUser.innerHTML = ""
    for (let index = 0; index < turno8.length; index++) {
        let p = document.createElement("p")
        p.innerHTML=turno8[index]
        crearUser.appendChild(p)
    }
    
}

desaparecer.addEventListener("click", ()=>{
    let crearUser = document.getElementById("crearUser");
    let eliminar = turno8.findIndex((a)=> a === incio_sesion[0])
    if (eliminar != -1) {
        turno8.splice(eliminar,1)
        
    }
    crearUser.innerHTML = ""
    for (let index = 0; index < turno8.length; index++) {
        let p = document.createElement("p")
        p.innerHTML=turno8[index]
        crearUser.appendChild(p)
    }
})
