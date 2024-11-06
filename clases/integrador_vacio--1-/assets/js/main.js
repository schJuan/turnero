let carrito = []
let productos = new Array()
let gestor 
const key_carrito = "carrito"
document.addEventListener("DOMContentLoaded", ()=>{
    carrito = JSON.parse(localStorage.getItem(key_carrito)) || []

    gestor = new GestionarProductos()
    gestor.iniciar()

})


document.getElementById("buscar").addEventListener("keyup", ()=>{

    let q = document.querySelector("#buscar").value 
    if(q.length >= 3 ){
        console.log("el usuario esta escribiendo")
    }
})