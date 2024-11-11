let incio_sesion = new Array()



let input_boton = document.getElementById("inicioSesion")
input_boton.addEventListener("click",()=>{
    let input_usuario = document.getElementById("usuario").value
    let input_contrasenia = document.getElementById("contrasenia").value
    let verificacion  = 0
    for (let index = 0; index < usuarios.length; index++) {
        if(input_usuario === usuarios[index].usuario && input_contrasenia === usuarios[index].contrasenia){
            if (usuarios[index].admin) {
              verificacion = 2
                incio_sesion.push(usuarios[index])
            }else{
                verificacion = 1
                incio_sesion.push(usuarios[index])
            }
        }
    }
    if (verificacion == 2) {
        alert("hola profe")
        input_boton.classList.add(`button_inicio`)
        
    } else if (verificacion == 1) {
        alert("hola putito")
        input_boton.classList.add(`button_inicio`)


    } else {
        alert ("Usuario o contraseña incorrecto")
    } 
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
        if (turno8[index] === incio_sesion[0].usuario) {
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
    if (falso !== 0 ){
        alert("no es posible agregar, ya estas")
    } else if (incio_sesion.length === 0){
        alert ("Debes iniciar sesion")
    }else if (turno.length == 12){
        alert("turno lleno")
    }else{
    
        crearUser.innerHTML = ""
        turno8.push(incio_sesion[0].usuario)
        for (let index = 0; index < turno8.length; index++) {
            let p = document.createElement(`p`)

            p.innerHTML = turno8[index]
            crearUser.appendChild(p)

        }
        
    }
    
    
}

desaparecer.addEventListener("click", ()=>{
    
    let crearUser = document.getElementById("crearUser");
    let eliminar = turno8.findIndex((a)=> a === incio_sesion[0].usuario)
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

