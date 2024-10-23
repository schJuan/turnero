function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}


let numero = parseInt(prompt("Ingrese un numero"));

let ope = prompt("Ingrese una operacion +, - , * o /");

let numero2 = parseInt(prompt("Ingrese otro numero"));

//let resultado = calculadora(numero,numero2,ope);

alert ("El resultado de la operacion es: "+calculadora(numero,numero2,ope));


