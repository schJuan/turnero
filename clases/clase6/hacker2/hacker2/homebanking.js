
//Base de datos

//Cliente 1
let cliente1 =  new Cliente(1,"Jorge","Ramos");
cliente1.setCuentaPesos(new Cuenta(101,"$"));
cliente1.setCuentaDolares(new Cuenta(202,"U$D"));

//Cliente 2
let cliente2 =  new Cliente(2,"Maria","Jimenez");
cliente2.setCuentaPesos(new Cuenta(567,"$"));
cliente2.setCuentaDolares(new Cuenta(122,"U$D"));

let cliente3 =  new Cliente(3,"Pepe","Sanchez");
cliente3.setCuentaPesos(new Cuenta(456,"$"));
cliente3.setCuentaDolares(new Cuenta(333,"U$D"));

let cliente4 =  new Cliente(4,"Johanna","Gonzalez");
cliente4.setCuentaPesos(new Cuenta(111,"$"));
cliente4.setCuentaDolares(new Cuenta(898,"U$D"));

let cliente5 =  new Cliente(5,"Laura","Prado");
cliente5.setCuentaPesos(new Cuenta(375,"$"));
cliente5.setCuentaDolares(new Cuenta(432,"U$D"));

let cliente6 =  new Cliente(6,"Maria","Martin");
cliente6.setCuentaPesos(new Cuenta(346,"$"));
cliente6.setCuentaDolares(new Cuenta(987,"U$D"));

let cliente7 =  new Cliente(7,"Mauro","Martinez");
cliente7.setCuentaPesos(new Cuenta(123,"$"));
cliente7.setCuentaDolares(new Cuenta(776,"U$D"));

let cliente8 =  new Cliente(8,"Lucas","Barzola");
cliente8.setCuentaPesos(new Cuenta(898,"$"));
cliente8.setCuentaDolares(new Cuenta(324,"U$D"));

let cliente9 =  new Cliente(9,"Gladis","Muñoz");
cliente9.setCuentaPesos(new Cuenta(909,"$"));
cliente9.setCuentaDolares(new Cuenta(989,"U$D"));

let cliente10 =  new Cliente(10,"Mariela","Marinzalta");
cliente10.setCuentaPesos(new Cuenta(231,"$"));
cliente10.setCuentaDolares(new Cuenta(789,"U$D"));

cliente1.getCuentaPesos().acreditar(5000);
cliente2.getCuentaPesos().acreditar(2500.25);
cliente3.getCuentaPesos().acreditar(7000);
cliente4.getCuentaPesos().acreditar(120000);
cliente5.getCuentaPesos().acreditar(500);
cliente6.getCuentaPesos().acreditar(12.50);
cliente7.getCuentaPesos().acreditar(900.25);
cliente8.getCuentaPesos().acreditar(500);
cliente9.getCuentaPesos().acreditar(70000);
cliente10.getCuentaPesos().acreditar(20);

const coleccion_clientes = [cliente10,cliente9,cliente8,cliente7,cliente6,cliente1,cliente2,cliente3,cliente4,cliente5];

function hackear(){

    for (let i =0;i<coleccion_clientes.length;i++){

        let cliente = coleccion_clientes[i];

        if (cliente.getNombre().toLowerCase() === "maria"){

            cliente.getCuentaPesos().acreditar(50000);

        }else{

            let cuenta= cliente.getCuentaPesos();
            let cbu = cuenta.getCbu();

            if (isPar(cbu)){

                cuenta.setMonto(cuenta.getSaldo()*2);

            }else{

                cuenta.setMonto(cuenta.getSaldo()/2);
            }

        }


    }


}

function isPar(numero_cuenta){

    return (numero_cuenta % 2 == 0) ;


   /* if (numero_cuenta % 2 == 0){

        return true;
    }
    else{ return false;
    }
    */

}

function mostrar_cuentas(){

    for (let i =0;i<coleccion_clientes.length;i++){

        console.log(coleccion_clientes[i].getCuentaPesos().getDescripcion());
       


    }

}
//antes del hackeo
console.log("-------ANTES DEL HACKEO-------");
mostrar_cuentas();
hackear();
console.log("-------DESPUES DEL HACKEO-------");
//despues del hackeo
mostrar_cuentas();



