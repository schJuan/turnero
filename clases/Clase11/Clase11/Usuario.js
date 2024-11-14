class Usuario {


    constructor(usuario,nombre,apellido,edad){

        this.usuario = usuario;
        this.nombre  = nombre;
        this.apellido  = apellido;
        this.edad = edad;

    }

    getDatos(){


        return this.nombre + " " + this.apellido + " " + this.edad;
    
      }

}