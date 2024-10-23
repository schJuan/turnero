class Alumno {
    constructor( anio, usuario, contrasenia){
        this.anio = anio
        this.usuario = usuario
        this.contrasenia = contrasenia
    }
}

let alumno1 = new Alumno (22, "Jschlott", "contaseña123");
let alumno2 = new Alumno (25, "Lgonzales", "contraseña321" );
const usuarios_alumnos = [alumno1,  alumno2];

