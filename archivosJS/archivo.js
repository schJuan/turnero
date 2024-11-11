let incio_sesion = new Array()


let profe1 = new Usuario("Franco","catelotti","contraseña123","29","3454558778");
let profe2 = new Usuario("Tcatelott", "contraseña321");
const usuarios = [profe1, profe2,]
class Usuario {
    constructor (nombre,apellido,contrasenia,edad,telefono){
        this.admin = false
        this.nombre = nombre
        this.apellido = apellido
        this.usuario = null
        this.contrasenia = contrasenia
        this.edad = edad
        this.telefono = telefono
    }
}

let input_boton = document.getElementById("inicioSesion")
input_boton.addEventListener("click",()=>{
    let profe =false
    let input_usuario = document.getElementById("usuario").value
    let input_contrasenia = document.getElementById("contrasenia").value
    input_boton.classList.add(`button_inicio`) 
    for (let index = 0; index < usuarios.length; index++) {
        if(input_usuario === usuarios[index].usuario && input_contrasenia === usuarios[index].contrasenia){
            alert("hola profe")
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    /*if (input_usuario && input_contrasenia != ""){
        document.getElementById("usuario").value = ""
        document.getElementById("contrasenia").value = ""
        for (let i = 0; i < usuarios_profes.length; i++) {
            if (input_usuario === usuarios_profes[i].usuario) {
                profe = true
            }
            
        }
        if(profe){
            
            alert("hola profe")
            incio_sesion.push(input_usuario)
            console.log(incio_sesion)
            
        }else{

            //alert("Hola mortal")
            incio_sesion.push(input_usuario)
            console.log(incio_sesion)
        }
        
    }else{
        alert("ingresa un usuario")
    }*/
   
})








let turno8 = []

let reservar = document.getElementById ("reservar")
let crearUser = document.getElementById("crearUser");
crearUser.classList.add("alumnos")
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

function verDisponible(turno) {
    let VariableDisponible = BajaSubeDisponibilidad(turno)
    let pa = document.getElementById(`Ndisponible`)
    pa.innerHTML = VariableDisponible
    
}
verDisponible(turno8)

reservar.addEventListener('click',()=>{
    turno8.length
    crearUsuario(turno8)
    let pa = document.getElementById(`Ndisponible`)
    let VariableDisponible = BajaSubeDisponibilidad(turno8)
    pa.innerHTML = VariableDisponible

})


function crearUsuario(turno) {
    
    let falso = averiguarUsuario()
    /*if (falso !== 0 ){
        alert("no es posible agregar, ya estas")
    } else*/ if (incio_sesion.length === 0){
        alert ("Debes iniciar sesion")
    }else if (turno.length == 12){
        alert("turno lleno")
    }else{
    
        crearUser.innerHTML = ""
        turno8.push(incio_sesion[0])
        for (let index = 0; index < turno8.length; index++) {
            let p = document.createElement(`p`)

            p.innerHTML = turno8[index]
            crearUser.appendChild(p)

        }
        
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
    let pa = document.getElementById(`Ndisponible`)
    let VariableDisponible = BajaSubeDisponibilidad(turno8)
    pa.innerHTML = VariableDisponible 
})

