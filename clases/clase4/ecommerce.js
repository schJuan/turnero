//constantes para valdiar datos
const user = "comprador";
const pass_comprador = "pass1234";


/**
 * funcion que se encarga de pedir datos al usuario
 */



function solicitarDatos(){

    
    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");

    //valida los datos ingresados
    if (validarDatos(usuario,pass)){

        iniciarCarrito ();


    }



}

/**
 * Valida que el usuario haya ingresado los datos correctos
 * @param {*} usuario  usuario a validar
 * @param {*} pass  pass a validar
 * @returns 
 */
function validarDatos(usuario,pass){
    let mensaje = "" ;

    //sino ingreso el usario
    if (!usuario){

        mensaje = "Es necesario ingresar usuario";
    }

    //sino ingreso el pass
    if(!pass){

        mensaje += "\nEs necesario ingresar pass";
    }

    //sino ingreso el usario y pass correcto
    if (usuario !=  user || pass != pass_comprador ){

        mensaje += "\nUsuario y/o pass incorrecto";
    }


    //si el mensaje esta vacio quiere decir que no hubo error
    if (mensaje == "") {

        return true ;

    }else {

    
        alert (mensaje) ;
        return false ;

    }



}


/**
 * arma la lista de acuerdo a lo que ingrese el usuario
 */
function iniciarCarrito(){

    let lista = "" ;

    let finalizar_carrito = false ;

    //mientras que finalizar carrito este en false ciclaa
    while (!finalizar_carrito){


        //se pide codigo de producto
        let cod = prompt("Ingrese codigo de producto");

        //se obtiene descripcion del producto segun codigo
        let producto = obtenerProducto(cod);


        if (producto){

            console.log("Producto agregado con exito : "+producto) ;

            //se suma a lista de productos
            lista += "\n" + producto;




        }else{
            //si el usuario puso cancelar
            if (cod === null){

                finalizar_carrito = true ;

            }else{

                alert("Ingrese un codigo de producto valido");
            }
        }



    }

    //si indico productos a comprar
    if (lista != ""){


        let resp = confirm ("Desea concretar la compra de :"+lista);
        if (resp){

            alert("Gracias por comprar en nuestra tienda online");


        }


    }


}

/**
 * devuelve la descripcion de un producto segun un codigo
 * @param {*} codigo de producto
 * @returns 
 */
function obtenerProducto(codigo){

    let producto ;

    switch(codigo) {


        case "1" :
            producto = "Carne" ;
            break;

        case "2" :
            producto = "Pollo" ;
            break; 
        case "3" : 
            producto = "Zapallo" ;
            break;
        case "4" : 
            producto = "Detergente"
            break;       
        case "5" : 
            producto = "Jabon de Tocador" ;
            break; 
        default :        
            producto = false ;

    }


    return producto ;


}


// cuando esta todo cargado se le pide datos al usuario
window.addEventListener('load', function() {
    solicitarDatos();

});


