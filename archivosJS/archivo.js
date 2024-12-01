
const url_turno = "./turnos.json"
const key_sesion = "key_sesion"
let sesion = JSON.parse(localStorage.getItem(key_sesion)) || []

let horarios = document.getElementById("horarios")

const pedirTurno = async () =>{
    turnos.forEach(turno => {
        
        let diaHora = document.createElement("div")
        diaHora.classList.add ("Hora")
        let divUsers = document.createElement("div")
        divUsers.innerHTML = ""
        divUsers.id = "crearUser"
        divUsers.classList.add("alumnos")
        for (let index = 0; index < turno.usuarios.length; index++) {
            let p = document.createElement("p")
            p.innerHTML = turno.usuarios[index]
            divUsers.appendChild(p)

        }
        crear_vistaTurno(turno,diaHora,divUsers)
        diaHora.appendChild(divUsers)
        horarios.appendChild(diaHora)
        
    });
    
}

function crear_vistaTurno(turno,div,divUser){
    let p = document.createElement("p")
    p.id="Ndisponible"
    let divDispo = document.createElement("div")
    divDispo.id = "disponibles"
    let button = document.createElement("button")
    button.id = "reservar"
    button.innerHTML ="Reservar"
    button.addEventListener('click', () => {
        crearUsuario(turno.usuarios,divUser)
        let VariableDisponible = BajaSubeDisponibilidad(turno.usuarios)
        p.innerHTML = VariableDisponible
        localStorage.setItem(key_turnos, JSON.stringify(turnos))
    })
    let button_Desreservar = document.createElement("button")
    button_Desreservar.id = "desaparecer"
    button_Desreservar.innerHTML = "Desreservar"
    button_Desreservar.addEventListener("click", () => {
        let sesionIniciada = guardar_usuario(key_sesion)
        //let crearUser = document.getElementById("crearUser");
        turno.usuarios = turno.usuarios.filter((a) => a !== sesionIniciada[0].usuario)
        localStorage.setItem(key_turnos, JSON.stringify(turnos))
        divUser.innerHTML = ""
        for (let index = 0; index < turno.usuarios.length; index++) {
            let p = document.createElement("p")
            p.innerHTML = turno.usuarios[index]
            divUser.appendChild(p)
        }

        let VariableDisponible = BajaSubeDisponibilidad(turno.usuarios)
        p.innerHTML = VariableDisponible
    })
    
    verDisponible(turno.usuarios, p)
    div.innerHTML = `
                    <h2>Musculacion ${turno.nombre} </h2>
                    <h2>Reserva el turno</h2>
                    <h3>Capacidad: 12</h3>
                    <h3>Disponibles</h3>
                   
                        
                    `
    divDispo.appendChild(p)
    div.appendChild(divDispo)
    div.appendChild(button)
    div.appendChild(button_Desreservar)
    
    //poderProfe(div,divUser,turno.usuarios)
    
}


pedirTurno()



let input_boton = document.getElementById("inicioSesion")
input_boton.addEventListener("click",()=>{
    
    let usuario_guardados = guardar_usuario(key_usuario)
    let input_usuario = document.getElementById("usuario").value
    let input_contrasenia = document.getElementById("contrasenia").value
    let verificacion  = 0
    for (let index = 0; index < usuario_guardados.length; index++) {
        if(input_usuario === usuario_guardados[index].usuario && input_contrasenia === usuario_guardados[index].contrasenia){
            if (usuario_guardados[index].admin) {
              verificacion = 2
                sesion.push(usuario_guardados[index])
                localStorage.setItem(key_sesion, JSON.stringify(sesion))
            }else{
                verificacion = 1
                sesion.push(usuario_guardados[index])
                localStorage.setItem(key_sesion, JSON.stringify(sesion))
            }
        }
    }
    if (verificacion == 2) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "hola profe",
            showConfirmButton: false,
            timer: 1500
        });
        input_boton.classList.add(`noVer`)
        
    } else if (verificacion == 1) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "hola mortal",
            showConfirmButton: false,
            timer: 1500
        });
        input_boton.classList.add(`noVer`)


    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario o contraseña incorrecto",
            footer: '<a href="./registro.htm">Ya te has registrado?</a>'
        });

    } 
})





let cerrarSesion = document.getElementById("cerrarSesion")

cerrarSesion.addEventListener("click", ()=>{
    let sesion = new Array ()
    localStorage.setItem(key_sesion, JSON.stringify(sesion))
    input_boton.classList.remove(`noVer`)
})


function averiguarUsuario(turno){
    let sesionIniciada = guardar_usuario(key_sesion)
    let variable = 0
    for (let index = 0; index < turno.length; index++) {
        if (turno[index] === sesionIniciada[0].usuario) {
             variable++
            
        }
        
    }
    return variable
}

function verDisponible(turno,pa) {
    let VariableDisponible = BajaSubeDisponibilidad(turno)
    pa.innerHTML = VariableDisponible
   
}





function crearUsuario(turno,divUser) {
    let sesionIniciada = guardar_usuario(key_sesion)
    let falso = averiguarUsuario(turno)
    if (falso !== 0 ){
        Swal.fire({
            icon: "error",
            title: "Taaantas ganas de entrenar?",
            text: "Ya estas en el turno",
            
        });
    } else if (sesionIniciada.length === 0){
        Swal.fire({
            icon: "error",
            title: "No tan rapido master",
            text: "Tenes que iniciar sesion",
            footer: '<a href="./registro.htm">Ya te has registrado?</a>'

        });
    }else if (turno.length == 12){
        Swal.fire({
            icon: "error",
            title: "Te re ganaron de mano master",
            text: "El turno esta lleno",
        });
    }else{
    
        divUser.innerHTML = ""
        turno.push(sesionIniciada[0].usuario)
        for (let index = 0; index < turno.length; index++) {
            let p = document.createElement(`p`)

            p.innerHTML = turno[index]
            divUser.appendChild(p)

        }
        
    }
    
    
}

function Set_pages(sesion) {

    if (sesion == "" ) {
        input_boton.classList.remove(`noVer`)
    }else{
        input_boton.classList.add(`noVer`)
    }
}

Set_pages(sesion)

function poderProfe(div,divUser,turno) {
    let button = document.createElement(`button`)
    button.innerHTML = "Agregar"
    let button_Borrar = document.createElement(`button`)
    button_Borrar.innerHTML = "Borrar"
    
    div.appendChild(button)
    div.appendChild(button_Borrar)
    button.addEventListener("click",
        SetearBoton(turno,divUser)
    )

}
function SetearBoton(turno,divUser) {
    let imput_profe = document.getElementById("imput_profe").value
    turno.push(imput_profe)
    localStorage.setItem(key_turnos, JSON.stringify(turnos))
    divUser.innerHTML = ""
    for (let index = 0; index < turno.length; index++) {
        let p = document.createElement("p")
        p.innerHTML = turno [index]
        divUser.appendChild(p)

    }
}