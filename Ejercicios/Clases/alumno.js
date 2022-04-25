var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log('Hola bienvenido!!!', this.nombre + ' ' + this.apellido + ' ' + this.peso);
    };
    Alumno.prototype.asignar = function (nombre, apellido, peso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
    };
    return Alumno;
}());
var alumno1 = new Alumno();
/*
alumno1.nombre = 'Juan';
alumno1.apellido = 'Garmendia';
alumno1.peso = 200;
*/
alumno1.asignar('Juan', 'Garmendia', 200);
alumno1.mostrarMensaje();
