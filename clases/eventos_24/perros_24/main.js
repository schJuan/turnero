let coleccion_perros = new Array();

let avisos = document.getElementById("avisos");

let btn_crear = document.getElementById("btn_crear");
btn_crear.addEventListener("click",()=>{

    if (validar_formulario()){

        generarPerro();
        

    }  



})


function generarPerro(){


    let nombre = document.getElementById("nombre").value;
    let raza = document.getElementById("raza").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let castrado = document.getElementById("castrado").checked;
    let foto = document.getElementById("ruta_foto").value;

    let perro = new Perro(nombre,raza,edad,genero,castrado,foto);

    coleccion_perros.push(perro);



    generar_card_perro(perro);

}


function validar_formulario(){

    avisos.innerHTML = "";

    let input_nombre = document.getElementById("nombre").value;
    let input_raza = document.getElementById("raza").value;
    let input_edad = document.getElementById("edad").value;
    let input_ruta_foto = document.getElementById("ruta_foto").value;
    let input_genero = (document.getElementById("genero").value).toLowerCase();

    let arreglo_mensajes = new Array();
    if (!input_nombre){
        arreglo_mensajes.push("Ingrese nombre");
    }

    if (!input_raza ){
        arreglo_mensajes.push("Ingrese raza");       

    }

    if (!input_edad || input_edad <= 0  ){
        arreglo_mensajes.push("Ingrese una edad correcta. Deber ser un numero mayor a 0");       

    }

    if (!input_genero ){
        arreglo_mensajes.push("Ingrese genero: debe ser H o M");       

    }

    if (!input_ruta_foto ){
        arreglo_mensajes.push("Ingrese la ruta de la imagen");        

    }

    if (arreglo_mensajes.length >0 ){


        let lista = document.createElement("ul");
        lista.textContent = "No es posible cargar los datos: ";

        arreglo_mensajes.forEach(element => {

            lista.appendChild(crear_li(element));

        })


        avisos.appendChild(lista);

    }


    return  arreglo_mensajes.length == 0



}


function crear_li(mensaje){

    let li = document.createElement("li");
    li.textContent = mensaje;

    return li ;


}






function generar_card_perro(perro){

    let new_div = document.createElement("div")
    let new_h2 = document.createElement("h2");
    new_div.id ="div"+perro.nombre+perro.foto; 
    new_h2.textContent = perro.nombre;

    let new_img = document.createElement("img");
    new_img.src = perro.foto;

    new_div.appendChild(new_h2);
    new_div.appendChild(new_img);

    let estado = document.createElement("h6");
    estado.textContent = perro.estado;
    new_div.appendChild(estado);

    estado.addEventListener("click",()=>{

    estado.textContent = "adoptado";

    let i = coleccion_perros.indexOf(e=>e.nombre = new_h2.textContent ) ;
    coleccion_perros[i].estado = "adoptado"; 
    


    });


    let contenedor = document.getElementById("perroCtn");
    contenedor.appendChild(new_div);

    resetear_form();



}




function resetear_form(){

    document.getElementById("nombre").value = "";
    document.getElementById("raza").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("genero").value = "";    
    document.getElementById("ruta_foto").value = "";

}