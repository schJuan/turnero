
/**
 * Clase  que modela la entidad cliente 
 */
class Cliente {

    /**
     * Funcion constructora
     * @param {*} nro_cliente  numero de cliente
     * @param {*} nombre 
     * @param {*} apellido 
     */
    constructor (nro_cliente,nombre,apellido){


        this.nro_cliente = nro_cliente;
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.cuenta_pesos = null ;
        this.cuenta_dolares = null ;

    }


    getCuentaPesos(){

        return this.cuenta_pesos ;
    }

    getCuentaDolares(){
        
        return this.cuenta_dolares;

    }

    setCuentaPesos(nueva_cuenta){

        this.cuenta_pesos = nueva_cuenta;
    }

    setCuentaDolares(nueva_cuenta){

        this.cuenta_dolares = nueva_cuenta;
    }

    getDatos(){

        return this.nro_cliente + " - " + this.nombre + " - " + this.apellido ;
    }






}
