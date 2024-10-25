/*function saludar() {

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
        console.log(arreglo);
    }
}

let turnoOchoHoras = [];






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





/*function Alumnos (nombre, apellido, anio){
    this.nombre = nombre;
    this.apellido = apellido;
    this.anio = anio;
}

/*const cliente1 = new Alumnos("Juan", "Schlotthauer",25 )
const cliente2 = new Alumnos("Juana", "Vicuña",39 )
const cliente3 = new Alumnos("Pablo", "Picasso",239 )*/

/*let funciona = "los alumnos que vienen a las 9 son";
funciona += "\n"+cliente1.nombre + "" + cliente1.apellido 
funciona += "\n"+cliente2.nombre + "" + cliente2.apellido 
funciona += "\n"+cliente3.nombre + "" + cliente3.apellido */

/*function crearAlumno() {
    let nombre = prompt("ingrese su nombre")
    let apellido= prompt("ingrese su apellido")
    let anio = prompt ("ingrese su edad")

    if (nombre && apellido && anio) {
       
        let nuevoAlumno = new Alumno (anio,nombre, apellido)
        alert("Alumno nuevo"+ nuevoAlumno.nombre + " " + nuevoAlumno.apellido + "tu edad es de" +" "+ nuevoAlumno.anio)
        usuarios_alumnos.push(nuevoAlumno)
        console.log(nuevoAlumno)

    } else {
        alert("Quien chota sos?")
    }
    
}

for (let i= 0 ; i <2; i++) {
   crearAlumno();
    
}
//apreta aceptar sin poner usuario primero 

/*function saludar() {
    
    alert("Bienvenido al turnero online")
    let usuario = prompt ("ingerese su nombre de usuario")
    return usuario

}


let usuario = saludar()



if (usuario != "" && usuario != null) {
    

    while (true) {

        let turnoPedido = prompt (`Hola ${usuario} que hora queres el turno?(solo numero).\n- 1) Turno mañana.\n- 2) Turno siesta.\n- 3) Turno tarde` );

        let horario_mañana = "elegi un horario de 8 a 13";

        let horario_siesta = "elegi un horario de 14 a 18";

        if (turnoPedido === null) {

            alert("cancelaste turno");

            break;

        }

        turnoPedido = parseInt(turnoPedido)

        if (turnoPedido === 1 || turnoPedido === 2 || turnoPedido === 3) {

            switch (turnoPedido) {

                case 1:

                    horario_elegido = parseInt(prompt (horario_mañana));

                    if (horario_elegido >= 8 && horario_elegido <= 13) {

                        alert ("te espero a las " + horario_elegido + "hs");

                    }else {

                        alert("tenes que elegir un horario dentro de la franja, recargá la página.");

                    }

                    break;

                case 2:

                    let horario_elegido2 = parseInt(prompt (usuario + "te espero a las " + horario_siesta + "hs"));

                    if (horario_elegido2 >= 14 && horario_elegido2 <= 18) {

                        alert ("te espero a las " + horario_elegido2 + "hs");

                    }else {

                        alert("tenes que elegir un horario dentro de la franja, recargá la página.")

                    }

                    break;

                case 3:

                    alert( usuario + " tu turno es a las 19");

                    break;

            }

            break;

        }else {

                alert ("tenes que poner un horario " + usuario);

        }

}}else if(usuario === null){
    alert ("saliste del Turnero")
}else {
    alert ("pone tu nombre desgraciado, recarga")
}



/*alert("Bienvenido al turnero online")
let usuario = prompt ("ingerese su nombre");
while (true) {
    let turnoPedido = prompt ("Hola "+ usuario + `que hora queres el turno?(solo numero)
        .- 1) Turno mañana
        .- 2) Turno siesta
        .- 3) Turno tarde` );

    let horario_mañana = "elegi un horario de 8 a 13"
    let horario_siesta = ""
    if(turnoPedido === null){
        alert("hiciste todo bien")
    }else if (turnoPedido == 1 || turnoPedido == 2 || turnoPedido == 3 || turnoPedido === null){
        switch (turnoPedido) {
            case 1:
                let horario_elegido = parseInt(prompt (horario_mañana))
                alert ("te espero a las " + horario_elegido + "hs")
                break;
            case 2:
                let horario_elegido2 = parseInt(prompt (usuario + "te espero a las " + horario_siesta + "hs"))
                alert ("te espero a las " + horario_elegido2 + "hs")
            case 3:
                alert( usuario + " tu turno es a las 19")
            default:
                alert("cancelaste turno")
                break;
        }
        /*if (turnoPedido == 1 || turnoPedido == 2) {
            if (turnoPedido == 1) {
                let horario_elegido = parseInt(prompt (horario_mañana))
                alert ("te espero a las " + horario_elegido + "hs")
                break
                
            }else {
                let horario_elegido2 = parseInt(prompt (usuario + "te espero a las " + horario_siesta + "hs"))
                alert ("te espero a las " + horario_elegido2 + "hs")
                break
            }
        }else if (turnoPedido === null){
                alert("cancelaste turno")
                break
            }
         else {
                alert( usuario + " tu turno es a las 19")
                break
            }
    }
        else {
        alert ("tenes que poner un horario " + usuario)
        
    }
}*/


/*const usuario = "user";
const contraseña = "pass1234";

let  cod_papa     = 1
let precio_papa = 500.00 ;

let  cod_zapallo     = 2 ;
let  precio_zapallo  = 350.00 ;

let  cod_naranja    = 3 ;
let  precio_naranaja  = 700.00 ;

let  cod_cebolla     = 4 ;
let  precio_cebolla  = 250.00 ;

alert ("Bienvenid@ a nuestro humilde carrito. \n Debe loguearse para poder comprar");

let user = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");

if (user != "" && pass != "" ){


    if ((user === usuario ) && (pass === contraseña)){

        alert("Hola "+usuario+"\nSolo podes comprar dos productos");

        let sumaCarrito = 0 ;
        let lista_productos = "" ;

        let cod_prod = parseInt(prompt("Ingrese el codigo de un producto"));

        console.log(cod_prod);

        if (!isNaN(cod_prod)){

            if(cod_prod === cod_papa){

                lista_productos += "Papa $" + precio_papa + "\n";
                sumaCarrito += precio_papa ;
            }else if (cod_prod === cod_zapallo){

                lista_productos += "Zapallo $" + precio_zapallo + "\n";
                sumaCarrito += precio_zapallo ;

            }else if (cod_prod === cod_naranja){

                lista_productos += "Naranja $" + precio_naranaja + "\n";
                sumaCarrito += precio_naranaja ;

            }else if (cod_prod === cod_cebolla){

                lista_productos += "Cebolla $" + precio_cebolla + "\n";
                sumaCarrito += precio_cebolla ;
            }else {

                console.log("codigo invalido");
            }

            



        }else {

            alert("Debes ingresar un numero");

        }

        cod_prod = parseInt(prompt("Ingrese el codigo de un segundo producto"));

        console.log(cod_prod);

        if (!isNaN(cod_prod)){

            if(cod_prod === cod_papa){

                lista_productos += "Papa $" + precio_papa + "\n";
                sumaCarrito += precio_papa ;
            }else if (cod_prod === cod_zapallo){

                lista_productos += "Zapallo $" + precio_zapallo + "\n";
                sumaCarrito += precio_zapallo ;

            }else if (cod_prod === cod_naranja){

                lista_productos += "Naranja $" + precio_naranaja + "\n";
                sumaCarrito += precio_naranaja ;

            }else if (cod_prod === cod_cebolla){

                lista_productos += "Cebolla $" + precio_cebolla + "\n";
                sumaCarrito += precio_cebolla ;
            }else {

                console.log("codigo invalido");
            }


            if (sumaCarrito > 0) {

                alert("Usted compro:\n"+lista_productos+"\n"+"La suma total de la compra es: $"+sumaCarrito);

            }else {

                alert("No fue posible realizar la compra");
            }
            



        }else {

            alert("Debes ingresar un numero");

        }



    }else{

        alert("Usuario y/o contraseña incorrectas.Recarga la pagina!!");

    }




}else{


    alert("Tenes que ingresar todos los datos. Recarga la pagina!!");

}
*/
