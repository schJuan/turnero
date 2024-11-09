
/*function inicioSecion(arregloDeUsuario) {
    let megaUsuario = prompt("ingrese su usuario")
    
    if (megaUsuario != "" && megaUsuario ) {
        megaUsuario = arregloDeUsuario.find((a)=> a.usuario_l == megaUsuario)
        if (megaUsuario != undefined) {
            let megaContrasenia = prompt ("Ingrese su contraseña")
            if (megaContrasenia === megaUsuario.contrasenia) {
                alert ("felicidades iniciaste secion")
                return megaUsuario
            }else {
                alert ("usuario o contraseña incorrectos")
                
            }
        }else{
            alert ("Usuario no encontrado")
        }
    } else {
        alert ("flaco reacciona")
    }


}


function pedirHorario (){
    let turno = prompt ("Pedi tu turno (elegi 1, 2 o 3 (no seas termo)) \n1)mañana de (8 a 13)  \n2)siesta de (14 a 18) \n3)noche de (19 a 21)");
    let horario = prompt ("A que hora venis???????");
    if(turno == 1 || turno == 2 || turno == 3){
        let opcion = turno2(turno, horario);
        if (opcion == 1) {
            alert(`Te espero a las ${horario}`);
            return horario;
        }else if (opcion == 2) {
            alert(`Te espero a las ${horario}`);
            return horario;
        }else if (opcion == 3) {
            alert(`te espero a las ${horario}`);
            return horario;
        }else {
            alert("no se pudo completar la solicitud, recarga la pagina.");
        }
    }

}

function turno2(turnoPedido, horario) {
    if (turnoPedido == 1 && horario >= 8 && horario <= 13) {

        return(1);

    }else if (turnoPedido == 2 && horario >= 14 && horario <= 18) {

        return(2);

    }else if (turnoPedido == 3 && horario >= 19 && horario <= 21) {

        return(3);

    }else {
        return(-1);
    }

}

function esta_o_no(usuario, turno, horario) {
    
    for(let i of turno[horario - 8]) {
        if (i == usuario.usuario_l){
            return true;
        }
        else {
            return false;
        }
    }
}

function confirmacion (usuario, turno, horario){
    parseInt(horario)
    if (turno.length == 3) {
        alert ("turno lleno, te ganaro papi/mami/pape");
    }else if (esta_o_no(usuario, turno, horario)) {
        alert ("Tantas ganas tenes de venir?? ya estas pa");
    }
    else{
        turno[horario - 8].push(usuario.usuario_l);
        console.log(turnos);
    }
}



let turnoHora8= [];
let turnoHora9= [];
let turnoHora10= [];
let turnoHora11= [];
let turnoHora12= [];
let turnoHora13= [];
let turnoHora14= [];
let turnoHora15= [];
let turnoHora16= [];
let turnoHora17= [];
let turnoHora18= [];
let turnoHora19= [];
let turnoHora20= [];
let turnoHora21= [];

const turnos = [
    turnoHora8,
    turnoHora9,
    turnoHora10,
    turnoHora11,
    turnoHora12,
    turnoHora13,
    turnoHora14,
    turnoHora15,
    turnoHora16,
    turnoHora17,
    turnoHora18,
    turnoHora19,
    turnoHora20,
    turnoHora21,
]

function crearAlumno(arreglo) {
    let usuario_l = prompt("ingrese su usuario")
    let contrasenia= prompt("ingrese su contrasenia")
    let anio = parseInt(prompt ("ingrese su edad"))

    let repetido = false

    for (const usuaRio of arreglo) {
        if (usuario_l == usuaRio.usuario_l) {
           repetido = true
        }
    }
    if(repetido){
        alert("ese usuario esta ocupado")
    }
    else if (usuario_l && contrasenia && anio) {
        let nuevoAlumno = new Alumno (anio,usuario_l, contrasenia)
        alert("Alumno nuevo "+ nuevoAlumno.usuario_l + " " + nuevoAlumno.contrasenia + "tu edad es de" + " " + nuevoAlumno.anio)
        arreglo.push(nuevoAlumno)
        console.log(nuevoAlumno)
        return nuevoAlumno

    } else {
        alert("Quien sos?")
    }
    
}
/*for (let horario = 3; horario < turnos.length; i++) {
    const limite = turnos[horario];
    break
    
}*/

/*function salirUsuario(arreglo, turno){
    let afuera = true
    while (afuera) {
     let opcion = parseInt(prompt("Selecione 1 Crear usuario 2 Ingresar al turnero 3 salir"))
     switch (opcion) {
        case 1:
            crearAlumno(arreglo)
            break;
        case 2:
            let usuario = inicioSecion(arreglo);

            let horario = pedirHorario ();

            confirmacion (usuario, turno, horario);
          
            console.log (turno)
            break
        case 3:
            afuera = false
            break
        
        default:

            break;
     }  



}}*/

//salirUsuario (usuarios_alumnos, turnos)
