// mas ejemplos
//operadores de comparación: ==, ===, !==, !=, >, <, <=, >=
let num = 7;
if (num < 10) {
    console.log("El número " + num + " es menor a 10");
} else if (num > 10) {
    console.log("El número " + num + "  es mayor a 10");
} else {
    console.log("El número es 10");
}

if (num === '7') {
    console.log("El número " + num + " es igual a '7' en tipo y valor");
} else if (num == '7') {
    console.log("El número " + num + " es igual a '7' en valor y no en tipo");
} else {
    console.log("El número no es ni el número 7, ni la string '7'");
}

//operadores lógicos: &&, ||, !
console.log("false && false = " + (false && false));
console.log("false && true = " + (false && true));
console.log("true && true = " + (true && true));
console.log("false || false = " + (false || false));
console.log("false || true = " + (false || true));
console.log("true || true = " + (true || true));
console.log("!true = " + (!true));
console.log("!false = " + (!false));

let hour = 12;
let isWeekend = true;
if (hour < 8 || hour > 18 || isWeekend) {
    console.log( 'La escuela está cerrada.' );
} else {
    console.log('La escuela está abierta.');
}

let age = 22;
let hasDNI = true;
if (age >= 18 && hasDNI){
    console.log( 'Puede pasar.' );
} else {
    console.log( 'Lo lamento, no puede pasar.' );
}


//prompt - pedir input al usuario
var name2 = prompt("Ingrese su nombre");

//alert
//String method: .toLowerCase()
alert("Su nombre en minúscula es: " + name2.toLowerCase());
//String method: .toUpperCase()
alert("Su nombre en mayúscula es: " + name2.toUpperCase());




let cobre_sueldo  = true ;

let clima_nublado = false;

let trabajar = true;

//si cobre el sueldo y no tengo qeu trabajar y el clima no esta nublado entronces salgo de shooping
if (cobre_sueldo && !trabajar  && !clima_nublado ) {

    alert("Salgo de shopping"); 
}else{

// en caso contrario no salgo
    alert("No salgo");

}