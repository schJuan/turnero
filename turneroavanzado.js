function saludar() {

    alert("Bienvenido al turnero online");
    let usuario = prompt ("ingerese su nombre de usuario");
    return usuario;

}

function pedirHorario (){
    let turno = prompt ("Pedi tu turno (elegi 1, 2 o 3 (no seas termo)) \n1)mañana de (8 a 13)  \n2)siesta de (14 a 18) \n3)noche de (19 a 21)");
    let horario = prompt ("A que hora venis???????");
    if(turno == 1 && turno == 2 && turno == 3){
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

function esta_o_no(usuario, turno) {
    for(let i of turno) {
        if (i.usuario_l == usuario.usuario_l){
            return true;
        }
        else {
            return false;
        }
    }
}

function confirmacion (usuario, turno){
    if (turno.length == 3) {
        alert ("turno lleno, te ganaro papi/mami/pape");
    }else if (esta_o_no(usuario, turno)) {
        alert ("Tantas ganas tenes de venir?? ya estas pa");
    }
    else{
        turno.push(usuario);
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
let turnoHora = "turnoHora"


for (const turno of turnos) {

    if (turno == turnoHora + "15" ) {
        turno.push("palun")
        console.log(turno)
    }
    
        /*if (turno == turnos.includes(15)) {
            turno.push("Palun")
            console.log(turno)
        }*/
    
}



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
        alert("Alumno nuevo "+ nuevoAlumno.usuario_l + " " + nuevoAlumno.contrasenia + "tu edad es de" +" "+ nuevoAlumno.anio)
        arreglo.push(nuevoAlumno)
        console.log(nuevoAlumno)
        return nuevoAlumno

    } else {
        alert("Quien sos?")
    }
    
}
/*let alumno8 = crearAlumno(usuarios_alumnos)

let usuario = saludar();

let horario = pedirHorario ();

let andara = confirmacion (usuario, turnoHora8);*/



function salirUsuario(arreglo, turno){
    let afuera = true
    while (afuera) {
     let opcion = parseInt(prompt("Selecione 1 Crear usuario 2 Ingresar al turnero 3 salir"))
     switch (opcion) {
        case 1:
            let alumno8 = crearAlumno(arreglo)
            break;
        case 2:
            let usuario = saludar();

            let horario = pedirHorario ();

            let andara = confirmacion (usuario, turno);
            break
        case 3:
            afuera = false
            break
        default:
            break;
     }



}}

//salirUsuario (usuarios_alumnos, turnoHora8)



/*for (let i= 0 ; i <2; i++) {  
   crearAlumno();
    
}*/