class Bitacora {


    constructor(){

        this.fecha = new Date();
        this.registros = Array();

    }


    addRegistro(reg_nuevo){


        this.registros.push(reg_nuevo);


    }

    mostrarBitacora(){


        let registros = "";

        this.registros.forEach((r)=>registros += r.getDescripcion()+"\n");

        alert(registros) ;

    }


}