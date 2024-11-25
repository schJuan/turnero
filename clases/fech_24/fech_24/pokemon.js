class Pokemon{


    constructor(id,name,image){


        this.id = id ;
        this.name = name;
        this.image = image;

    }

    getTitle(){


        return this.name + " #"+this.id ;

    }

    getId(){


        return this.id;

    }

    /**
     * 
     * @returns 
     */
    getSrcImage(){


        return this.image;

    }

    /**
     * Metodo para obtener el nombre del pokemon
     * @returns el nombre del pokemon
     */
    getName(){

        return this.name;
    }



}