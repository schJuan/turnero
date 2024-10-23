class Login {

    constructor(user,pass){

        this.user = user ;
        this.pass = pass;
        this.is_adm = false;
        this.cliente = null ;

    }  

    getUser(){

        return this.user;
    }



    setCliente(cliente){

        this.cliente = cliente;
    }

    getCliente(){

        return this.cliente;
    }
    



}