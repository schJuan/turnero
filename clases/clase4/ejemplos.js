const numeroSecreto = 7 ;

let numero = parseInt(prompt("Ingrese un numero"));

while (numero != null && !isNaN(numero)){

        let valor = juego(numero);
        if (valor == -1){

            alert("El numero es menor");
        }else if (valor == 1){

            alert("El numero es mayor");
        }
        else {

            alert("Ganaste");
        }



         numero = parseInt(prompt("Ingrese un numero"));


}


function juego(numero){
    let toRet ;


        if (numero > numeroSecreto){

            toRet  = -1 ;
            

        }else if (numero < numeroSecreto){

            toRet  = 1 ;

        }else {


            toRet  = 0 ;

        }


        return toRet;


}



