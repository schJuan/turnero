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

function esta_o_no(usuario, arreglo) {
    for(let i of arreglo) {
        if (i === usuario){
            return true;
        }
        else {
            return false;
        }
    }
}

function confirmacion (usuario, arreglo){
    if (arreglo.length == 3) {
        alert ("turno lleno, te ganaro papi/mami/pape");
    }else if (esta_o_no(usuario, arreglo)) {
        alert ("Tantas ganas tenes de venir?? ya estas pa");
    }
    else{
        arreglo.push(usuario);
        console.log(turnoOchoHoras);
    }
}

let turnoOchoHoras = [];






function crearAlumno() {
    let usuario_l = prompt("ingrese su usuario")
    let contrasenia= prompt("ingrese su contrasenia")
    let anio = parseInt(prompt ("ingrese su edad"))

    let repetido = false

    for (const usuaRio of usuarios_alumnos) {
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
        usuarios_alumnos.push(nuevoAlumno)
        console.log(nuevoAlumno)
        return nuevoAlumno

    } else {
        alert("Quien sos?")
    }
    
}
let alumno8 = crearAlumno()

let usuario = saludar();

let horario = pedirHorario ();

let andara = confirmacion (usuario, turnoOchoHoras);


/*for (let i= 0 ; i <2; i++) {  
   crearAlumno();
    
}*/