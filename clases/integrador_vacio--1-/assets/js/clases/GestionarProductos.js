class GestionarProductos{
    iniciar (){
        productos = [
            {
                "id": 1,
                "nombre": "Intel Pentium Gold G7400",
                "descripcion": "12th Generación. Socket S1700",
                "precio": 300000,
                "stock": 50,
                "img": "pentiumGold.png",
                "destacado": 0
            },
            {
                "id": 2,
                "nombre": "Intel Celeron G6900 3.5GHz",
                "descripcion": "12th Generación. Socket S1700",
                "precio": 5907,
                "stock": 50,
                "img": "celeron.png",
                "destacado": 1
            },
            {
                "id": 3,
                "nombre": "Intel i3 12100F",
                "descripcion": "12th Generación. Sin video. Socket S1700",
                "precio": 8858,
                "stock": 50,
                "img": "i3.png",
                "destacado": 0
            },
            {
                "id": 4,
                "nombre": "Intel i3 12100",
                "descripcion": "12th Generación. Video integrado. Socket S1700",
                "precio": 23371,
                "stock": 50,
                "img": "i3.png",
                "destacado": 1
            }
        ]

        let productosDestacados = productos.filter(prod => prod.destacado == 1)
        this.cargarProductos(productosDestacados)


    }
    cargarProductos(productos){

        const divProductos = document.querySelector("#productos")

        divProductos.innerHTML = ""

        if (productos.length == 0) {

            console.log("no se encontraron productos ")


        }else{


            productos.forEach(producto => {
                
                const {id, nombre,precio,img,cantidad,descripcion} = producto 

                let prod = document.createElement ("div")
                prod.innerHTML = `
                                    <div class = "w-20">
                                        <img src ="./assets/img/${img}" alt "" width ="150"  height = "150"> </img>
                                    
                                    </div>
                
                 
                                      `

            divProductos.appendChild (prod)

            });



        }



    }






}