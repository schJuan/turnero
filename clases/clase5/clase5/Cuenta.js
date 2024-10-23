class Cuenta {

    constructor(cbu,tipo){


        this.cbu = cbu;
        this.tipo = tipo ;
        this.saldo = 0 ;

    }

    getSaldo(){

        return this.saldo;
    }

    getTipo(){

        return this.tipo;
    }

    debitar (monto){

        this.saldo = this.saldo - monto ;
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