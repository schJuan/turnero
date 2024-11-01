function iniciarSesion(){
    avisos.innerHTML

    let input_usuario = document.getElementById("usuario").value
    let input_contrasenia = document.getElementById("contrasenia").value
    let input_boton = document.getElementById("inicioSecion").value
    
    let incio_sesion = new Array()
    if (!input_usuario) {
        incio_sesion.push("usuario")
    }
    if (input_contrasenia) {
        incio_sesion.push("contrasenia")
    }
    if (input_boton) {
        
    }
}