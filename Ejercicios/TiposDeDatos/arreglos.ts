interface Alumno {
    nombre: string,
    edad: number
}

var nombres:Array<string> = ["Juana", "María", "Ana", "Carmen"];
console.log(nombres[1]);

var numeros:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numeros[3]);

var alumnos:Array<Alumno> = [
    {
        nombre: "María",
        edad: 15
    },
    {
        nombre: "Juan",
        edad: 26
    },
    {
        nombre: "Mayte",
        edad: 24
    }
]

console.log(alumnos[2]);