class Alumno{
    private nombre: string;
    apellido: string;
    peso: number;

    mostrarMensaje(){
        console.log('Hola bienvenido!!!', this.nombre + ' ' + this.apellido + ' ' + this.peso);
    }

    asignar(nombre:string, apellido:string, peso:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.peso = peso;
    }
}

var alumno1:Alumno = new Alumno();
/*
alumno1.nombre = 'Juan';
alumno1.apellido = 'Garmendia';
alumno1.peso = 200;
*/
alumno1.asignar('Juan', 'Garmendia', 200);

alumno1.mostrarMensaje();