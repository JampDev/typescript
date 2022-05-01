var nombres = ["Ana", "María", "Andrea"];
console.log(nombres);
nombres.forEach(function (nombre) {
    if (nombre == "Ana") {
        console.log("Hola Ana");
    }
});
var alumnos = [];
alumnos.push({ nombre: "Ana", apellido: "Pineda" });
alumnos.push({ nombre: "Juan", apellido: "Ledesma" });
alumnos.push({ nombre: "Luis", apellido: "Castro" });
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre);
});
