class Usuario {
    constructor(nombre, apellido, contrasenia, edad, telefono) {
        this.admin = false
        this.nombre = nombre
        this.apellido = apellido
        this.usuario = null
        this.contrasenia = contrasenia
        this.edad = edad
        this.telefono = telefono
    }
    usuarioAdmin() {
        if (this.admin) {
            return this.admin = false
        } else {
            return this.admin = true
        }
    }
    NombreUsuario() {
        return this.usuario = this.nombre.substring(0, 1) + this.apellido.substring(0, 8)
    }
}

let profe1 = new Usuario("Franco", "catelotti", "contraseña123", "29", "3454558778");
profe1.usuarioAdmin()
profe1.NombreUsuario()
console.log(profe1)
const usuarios = [profe1]
//let AlumnosProfes = Json.parse(localStorage.getItem(usuarios))

/*if(!AlumnosProfes){

    const  Usu_arios = new Array();
    localStorage.setItem(usuarios,JSON.stringify(Usu_arios))
}*/