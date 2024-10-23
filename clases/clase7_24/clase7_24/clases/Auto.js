class Auto {

    constructor(modelo,marca,precio){
        this.modelo = modelo;
        this.marca = marca ;
        this.precio = precio;
        this.id = -1 ;
    }

    mostrar_descripcion(){


        return (this.id + " - " +this.modelo + " - " + this.marca + " - $" + this.precio) ;

    }

    set_id(nuevo_id){

        this.id  = nuevo_id;
    }




}