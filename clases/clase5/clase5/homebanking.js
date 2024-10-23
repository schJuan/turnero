
//Creo a los clientes del bancoy le asocio cuentas

//Cliente 1
let cliente1 =  new Cliente(1,"Jorge","Ramos");
let cuenta = new Cuenta(1,"$") ;
cliente1.setCuentaPesos(cuenta);
cliente1.setCuentaDolares(new Cuenta(2,"U$D"));


let cuenta_pesos = cliente1.getCuentaPesos();
cuenta_pesos.acreditar(5000);


//Cliente 2
let cliente2 =  new Cliente(2,"Maria","Jimenez");
cliente2.setCuentaPesos(new Cuenta(3,"$"));
cliente2.setCuentaDolares(new Cuenta(4,"U$D"));


let mensaje = "Bienvenido al sistema de tranferencias";
mensaje +="\nInfo de clientes:";
mensaje +="\n"+cliente1.getDatos();
mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
mensaje +="\n--------------------------";
mensaje +="\n"+cliente2.getDatos();
mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
alert(mensaje);



let tranferencia = true ;
while (tranferencia){


    let cliente1 = getCliente();

    if (cliente1){

        let cliente1_cuenta = getCuentaCliente(true,cliente1);

        if (cliente1_cuenta){

            let cliente2 = getCliente();

            if (cliente2){

                let cliente2_cuenta = getCuentaCliente(false,cliente2);
                if (cliente2_cuenta){

                        let monto = parseFloat(prompt("Ingrese el monto a transferir"));

                        if (monto ){


                            mensaje = "antes de la tranferencia";
                            mensaje +="\n"+cliente1.getDatos();
                            mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
                            mensaje +="\n"+cliente2.getDatos();
                            mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
                            console.log(mensaje);

                            transferir(monto,cliente1_cuenta,cliente2_cuenta);

                            mensaje = "despues de la tranferencia";
                            mensaje +="\n"+cliente1.getDatos();
                            mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
                            mensaje +="\n"+cliente2.getDatos();
                            mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
                            console.log(mensaje);



                        }else{

                            alert("No se indico un monto valido")
                        }


                }else{

                    alert("No se indico cuenta destino")
        
        
                }


            }else{

                alert("No se indico un cliente correcto");


            }
        }else{

            alert("No se indico cuenta origen")


        }


    }else{

        alert("No se indico un cliente correcto")


    }


    tranferencia = confirm("Desea realizar otra transferencia ?");




}



/**
 * Dados los clientes detecta cual es el cliente que indica el usuario
 * @returns 
 */
function getCliente(){


    let nro_cliente = prompt("Indique nro de cliente");

    if (nro_cliente == cliente1.nro_cliente){


        return cliente1;

    }

    if (nro_cliente == cliente2.nro_cliente){


        return cliente2;

    }

    return null;


}


/**
 * de acuerdo si es origen o destino se muetsra mensaje correcto
 * @param {*} origen 
 * @param {*} cliente 
 * @returns 
 */
function getCuentaCliente(origen,cliente){
    let mensaje = "Indique cuenta";
    if (origen) {
       
        mensaje += " origen:"

    }else {

        mensaje += " destino:"


    }

    mensaje+= "\n 1) "+cliente.getCuentaPesos().getDescripcion() ;
    mensaje+= "\n 2) "+cliente.getCuentaDolares().getDescripcion() ;

    let resp = prompt(mensaje);
    if (resp == 1 ){


        return cliente.getCuentaPesos();

    }

    if (resp == 2 ){


        return cliente.getCuentaDolares();

    }


    return false ;


}



/**
 * Dado una cuenta origen y destino se realiza la tranferencia de un monto
 * @param {*} monto 
 * @param {*} cuenta_origen 
 * @param {*} cuenta_destino 
 */

function transferir (monto,cuenta_origen,cuenta_destino){

    if (cuenta_origen && cuenta_destino) {


        if (cuenta_destino.getTipo() === cuenta_destino.getTipo()){



                if (cuenta_origen.tieneSaldo(monto)){


                    cuenta_origen.debitar(monto);

                    cuenta_destino.acreditar(monto);

                    alert("Tranferencia exitosa");



                }else{


                    alert("No es posible tranferir. Saldo insuficiente.") ;


                }
        }else{


            alert("las cuuentas no son del mismo tipo");

        }
    }else{


        alert("NO se encontro cuenta origen y/o destino ");
    }



}



/*


mensaje = "antes de la tranferencia";
mensaje +="\n"+cliente1.getDatos();
mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
mensaje +="\n"+cliente2.getDatos();
mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
console.log(mensaje);


let cuenta_pesos2 = cliente2.getCuentaPesos();



transferir(1250,cuenta_pesos,cuenta_pesos2);


mensaje = "despues de la tranferencia";
mensaje +="\n"+cliente1.getDatos();
mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
mensaje +="\n"+cliente2.getDatos();
mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
console.log(mensaje);

*/



























