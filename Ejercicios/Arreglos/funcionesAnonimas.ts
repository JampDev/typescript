var nombres:string[] = ["Ana", "María", "Andrea"];
console.log(nombres);

nombres.forEach((nombre)=>{
    if(nombre == "Ana"){
        console.log("Hola Ana");
    }
});

interface Alumno{
    nombre:string;
    apellido:string;
}

var alumnos:Alumno[] = [];
alumnos.push({nombre:"Ana", apellido:"Pineda"});
alumnos.push({nombre:"Juan", apellido:"Ledesma"});
alumnos.push({nombre:"Luis", apellido:"Castro"});

alumnos.forEach((alumno) => {
    console.log(alumno.nombre);
})