var nombres:string[] = ["Ana", "María", "Juan"];
console.log(nombres);
nombres.push("Carolina");
console.log(nombres);

var numeros:number[] = [15, 23, 39, 59];
numeros.push(88);
console.log(numeros);

interface Alumno{
    nombre:string;
    apellido:string;
}

var alumnos:Alumno[] = [];

alumnos.push({
    nombre:"Ana",
    apellido:"Garmendia"
})

console.log(alumnos);

var jonathan:Alumno = {
    nombre: "Jonathan",
    apellido: "Morocho"
}

alumnos.push(jonathan);

console.log(alumnos);