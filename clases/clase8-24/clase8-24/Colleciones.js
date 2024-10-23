//Cliente 1
let cliente1 =  new Cliente(1,"Nicolas","Martini");
cliente1.setCuentaPesos(new Cuenta(111111,"$"));
cliente1.setCuentaDolares(new Cuenta(222222,"U$D"));
let cuenta_pesos = cliente1.getCuentaPesos();
cuenta_pesos.acreditar(5000);


//Cliente 2
let cliente2 =  new Cliente(2,"Maria","Jimenez");
cliente2.setCuentaPesos(new Cuenta(33333333,"$"));
cliente2.setCuentaDolares(new Cuenta(444444,"U$D"));


//Cliente 2
let cliente3 =  new Cliente(3,"Pedro","Perez");
cliente3.setCuentaPesos(new Cuenta(55555555,"$"));
cliente3.setCuentaDolares(new Cuenta(6666666,"U$D"));
cliente3.getCuentaDolares().acreditar(200);

let coleccion_clientes = new Array();
coleccion_clientes.push(cliente1);
coleccion_clientes.push(cliente2);
coleccion_clientes.push(cliente3);



let login1 = new Login("nmartini",'pass1234');
login1.setCliente(cliente1);

let login2 = new Login("mjimenez",'pass1234');
login2.setCliente(cliente2);

let login3 = new Login("pperez",'pass1234');
login3.setCliente(cliente3);

let colleccion_logines = new Array();
colleccion_logines.push(login1);
colleccion_logines.push(login2);
colleccion_logines.push(login3);

let bitacora = new Bitacora();

