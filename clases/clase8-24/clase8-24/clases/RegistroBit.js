/**
 * Clase que modela lo que va pasando en la web
 */
class RegistroBit {


    constructor(mensaje,usuario){


        this.mensaje = mensaje ;
        this.usuario = usuario;
        this.fecha_hora = new Date() ; 

    }

    getFechaHora(){


        return this.fecha_hora;

    }

    getDescripcion(){

        return this.mensaje + " - " + this.usuario + " - " + this.fecha_hora ;

    }







}
