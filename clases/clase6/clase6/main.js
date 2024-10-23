let car_brands = [] ;
car_brands[0] = 'Audi';
car_brands[1] = 'Bugatti';


let car_brands2 = ['Audi','Bugatti','BMW','Ford','Fiat','Hyundai','Lexus','Peugeot','Renault'];

let color = new Array() ;
color[0] = "azul";
color[1] = "verde";


//capasidad
console.log(color.length)

console.log(color.indexOf("verde"));

let shopping_list = new Array('leche', 'mostaza', 'fideos', 'arroz', 'arvejas', 'manzanas');

//agrega al principio
shopping_list.unshift("bananas");

//agrega al final
shopping_list.push("sandia");

//elimina del final
shopping_list.pop();

//elimina del principio
shopping_list.shift();




let data = ["auto", 1, 5, "rojo", "verde", 5, 11, "casa", 2];
let no_number = new Array();
let sum = 0;
for (let i = 0 ; i < data.length ; i++){

    
    if (typeof data[i] === "number"){

        sum += data[i] ;

    }else {
        
        no_number.push(data[i]);
    }





    const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

    // recibo el elemento a borrar por parámetro
function  eliminar(nombre)  {
        // busco su índice en el array
        let index = nombres.indexOf(nombre)
    
         // si existe, o sea es distinto a -1, lo borro con splice
        if (index != -1 ) {
            nombres.splice(index, 1)
        } 
    }
    




} 


console.log("Resultado de la suma de numeros "+sum);
console.log("Arreglo nuevo \n"+no_number.join("\n"));



const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const p of productos) {
    console.log(p.id);
    console.log(p.producto);
}


for (let i = 0 ; i < productos.length;i++) {
    console.log(productos[i].id);
    console.log(productos[i].producto);
}





















