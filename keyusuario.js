const key_usuario = "key_usuario"
function guardar_usuario (clave){
    let i = JSON.parse(localStorage.getItem(clave))
    if (i) {

       return i

    } else {
        i = new Array ()
        return i 
    }
}