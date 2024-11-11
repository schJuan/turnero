
let button = document.getElementById (`RegistroCompletado`)

button.addEventListener("click",()=>{
    let Nombre = document.getElementById(`Nombre`).value
    let apellido = document.getElementById(`Apellido`).value
    let contrasenia = document.getElementById(`Contrasenia`).value
    let contrasenia2 = document.getElementById(`Contrasenia2`).value
    let edad = document.getElementById(`Edad`).value
    let telefono = document.getElementById(`Telefono`).value
    
    

    let msj = new Array
    if(msj.length == 0 ){
        let usuario = new Usuario(Nombre, apellido, contrasenia, edad, telefono)

    }else{
        for (let index = 0; index < array.length; index++) {
            
            
        }
    }
})



