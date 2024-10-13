//apreta aceptar sin poner usuario primero 
alert("Bienvenido al turnero online")

let usuario = prompt ("ingerese su nombre de usuario");
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
