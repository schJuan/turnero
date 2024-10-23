let ya_probo_suerte = false;
let credito_tasa_cero = false;
let login_actual = null;
const hoy = new Date();
alert("Bienvenid@s al home homebanking\n" + hoy.toLocaleString());

if (login()) {

    mostrar_menu();


}

function login() {

    let user = prompt("Ingrese su usuario");
    let pass = prompt("Ingrese su contraseña");

    if (user && pass){

        return checkearCredenciales(user,pass);

    }else {

        alert("Es necesario ingresar usuario y contraseña");

    }


}

function checkearCredenciales(user, pass) {


    let login = colleccion_logines.find((l)=> l.user === user && l.pass === pass );

    if (login){

        alert ("Bienvenido "+login.cliente.getNombreCompleto());

        let registro_nuevo = new RegistroBit("se logue "+login.getUser(),login.getUser());
        bitacora.addRegistro(registro_nuevo);

        login_actual = login ;

        return login ;

    }


}







function mostrar_menu() {
    let flag = true;
    while (flag) {

        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Transferencia ";
        mensaje += "\n2) Calcular tu credito ";
        mensaje += "\n3) Hoy tengo suerte? ";
        mensaje += "\n4) Ver Bitacora ";
        mensaje += "\n5) Salir ";

        let resp = prompt(mensaje);

        switch (resp) {

            case "1":
                transferencia();
                break;
            case "2":
                calcular_credito();
                break;
            case "3":
                numero_random();
                break;
            case "4":
                ver_bitacora();
                break;
            case "5":
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            case null:
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");


        }
    }


}


function transferencia() {


    let cliente1_cuenta = getCuentaCliente(true, login_actual.getCliente());

    if (cliente1_cuenta) {

        let cliente2 = getCliente();

        if (cliente2) {

            let cliente2_cuenta = getCuentaCliente(false, cliente2);
            if (cliente2_cuenta) {

                let monto = parseFloat(prompt("Ingrese el monto a transferir"));

                if (monto) {


                    mensaje = "antes de la tranferencia";
                    mensaje += "\n" + cliente1.getDatos();
                    mensaje += "\n" + cliente1.getCuentaPesos().getDescripcion();
                    mensaje += "\n" + cliente2.getDatos();
                    mensaje += "\n" + cliente2.getCuentaPesos().getDescripcion();
                    console.log(mensaje);

                    transferir(monto, cliente1_cuenta, cliente2_cuenta);

                    mensaje = "despues de la tranferencia";
                    mensaje += "\n" + cliente1.getDatos();
                    mensaje += "\n" + cliente1.getCuentaPesos().getDescripcion();
                    mensaje += "\n" + cliente2.getDatos();
                    mensaje += "\n" + cliente2.getCuentaPesos().getDescripcion();
                    console.log(mensaje);



                } else {

                    alert("No se indico un monto valido")
                }


            } else {

                alert("No se indico cuenta destino")


            }


        } else {

            alert("No se indico un cliente correcto");


        }
    } else {

        alert("No se indico cuenta origen")


    }





}



function getCuentaCliente(origen, cliente) {
    let mensaje = "Indique cuenta";
    if (origen) {

        mensaje += " origen:"

    } else {

        mensaje += " destino:"


    }

    mensaje += "\n 1) " + cliente.getCuentaPesos().getDescripcion();
    mensaje += "\n 2) " + cliente.getCuentaDolares().getDescripcion();

    let resp = prompt(mensaje);
    if (resp == 1) {


        return cliente.getCuentaPesos();

    }

    if (resp == 2) {


        return cliente.getCuentaDolares();

    }


    return false;


}

function getCliente() {


    let nro_cliente = prompt("Indique nro de cliente");

    if (nro_cliente) {
        let cliente_encontrado = coleccion_clientes.find((c) => c.nro_cliente == nro_cliente);

        return cliente_encontrado;

    }
    return null;


}


function transferir(monto, cuenta_origen, cuenta_destino) {

    if (cuenta_origen && cuenta_destino) {


        if (cuenta_origen.getTipo() === cuenta_destino.getTipo()) {



            if (cuenta_origen.tieneSaldo(monto)) {


                cuenta_origen.debitar(monto);

                cuenta_destino.acreditar(monto);

                bitacora.addRegistro(new RegistroBit("Tranferencia exitosa desde "+cuenta_origen.cbu+ " hacia "+cuenta_destino.cbu,login_actual));

                alert("Tranferencia exitosa");



            } else {


                alert("No es posible tranferir. Saldo insuficiente.");


            }
        } else {


            alert("las cuentas no son del mismo tipo");

        }
    } else {


        alert("No se encontro cuenta origen y/o destino ");
    }



}

function ver_bitacora() {


    bitacora.mostrarBitacora();

   

}

function numero_random() {

    if (ya_probo_suerte){

        alert("Ya probaste tu suerte por hoy");
    }else{

        ya_probo_suerte = true ;

        let numero = Math.floor(Math.random()*10);

        console.log(numero);

        if (numero  % 2 == 0){

            credito_tasa_cero = true ;
            alert("HOY TUS CREDITOS SON A TAZA 0");

            bitacora.addRegistro(new RegistroBit("tuvo suerte",login_actual.getUser()));

        }else{

            alert("Hoy no tuviste suerte :( !!")
            bitacora.addRegistro(new RegistroBit("no tuvo suerte",login_actual.getUser()));
        }

    }


}

function calcular_credito (){


    let monto = parseFloat(prompt("ingrese monto a solicitar"));
    let cantidad_dias = parseInt(prompt("ingrese cant de dias"));

    if (isNaN(monto) || isNaN(cantidad_dias)){

        alert("No ingresaste numeros");
        bitacora.addRegistro(new RegistroBit("credito abortado",login_actual.getUser()));

    }else{

        if (!credito_tasa_cero){

            let taza_anual = 70 / 100 ;
            let taza_diaria = (taza_anual / 360) * monto ;
            
            let interes = Math.ceil (taza_diaria * cantidad_dias) ;

            let montoTotal = monto + interes ;

            alert ("Monto soliticado: "+monto + "\n Monto a devolver: "+montoTotal );

        }else {

            alert("Tenes un credito a taza cero \n Monto solicitado: " + monto + "\n"+"Monto a devolver: "+monto);
        }
        
    }


}






