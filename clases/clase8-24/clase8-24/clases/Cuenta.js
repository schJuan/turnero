/**
 * Clase cuenta que modela la entidad cuenta bancaria
 */
class Cuenta {

    /**
     * contructor 
     * @param {*} cbu  cbu que identifica unibocamente a la cuenta
     * @param {*} tipo 
     */
    constructor(cbu,tipo){

        this.cbu = cbu ;
        this.tipo = tipo;
        this.saldo = 0;

    }   

     /**
      * 
      * @returns 
      */
    getSaldo(){


        return this.saldo;

    }
    

    getTipo(){


        return this.tipo;

    }


    debitar(monto){

        this.saldo = this.saldo - monto;


    }

    acreditar(monto){

        this.saldo = this.saldo + monto ;


    }

    getDescripcion(){

        return this.cbu + " - "+ this.tipo + " - " + this.saldo ;
    }


    tieneSaldo(monto){


        return this.saldo >= monto ;

    }




}
