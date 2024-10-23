
/*
const car = {


    type : "Fiat" ,
    model : "fdfdsf" ,
    year : 2011 ,
    color : "grey" 

}*/


const anio_actual = 2024;

function Car (tipo,modelo,anio,color){

    this.type = tipo ;
    this.model = modelo ;
    this.year = anio;
    this.color = color ;
    this.stock = 0 ;

}

/*
const car2 = new Car("peugeot","208",2022,"azul");
const car3 = new Car("bmw","a1",2016,"rojo");
const car4 = new Car("audi","a3",2021,"negro");


let mensaje = "Los autos disponibles son:";
mensaje += "\n"+car.type + " " + car.model + " stock: "+car.stock ;
mensaje += "\n"+car2.type + " " + car2.model + " stock: "+car2.stock ;
mensaje += "\n"+car3.type + " " + car3.model + " stock: "+car3.stock ;
mensaje += "\n"+car4.type + " " + car4.model + " stock: "+car4.stock ;


alert(mensaje);
*/

function calcularAntiguedad(anio_auto){

    return anio_actual - anio_auto ;


}

function calcularAntiguedad2(objeto_auto){

    return anio_actual - objeto_auto.year ;


}


function crearObjetoAuto (){

    let tipo = prompt("Ingrese el tipo de auto");
    let modelo = prompt("Ingrse un modelo");
    let anio = prompt("Ingrese anio del auto");
    let color = prompt("Ingrese un color") ;


    if (tipo && modelo && anio && color) {

        let auto_nuevo = new Car (tipo,modelo,anio,color);

        console.log("Auto nuevo creado "+ auto_nuevo.type + " " + auto_nuevo.model  );
        calcularAntiguedad(auto_nuevo);


    }else{

        alert ("Debes ingresar todos los datos");
    }



}


for (let i = 0 ;i < 2; i ++){

    crearObjetoAuto() ;

}




