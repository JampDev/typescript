interface Alumno{
    id:number;
    nombre:string;
    apellido:string;
}

var alumnos:Alumno[] = [];
alumnos.push({id:1, nombre:"Ana", apellido:"Pineda"});
alumnos.push({id:2, nombre:"Juan", apellido:"Ledesma"});
alumnos.push({id:3, nombre:"Luis", apellido:"Castro"});

var alumnoEncontrado:Alumno = alumnos.find((alumno)=>{
    return alumno.id == 3;
});

console.log(alumnoEncontrado);

var alumnoEncontrado:Alumno = alumnos.find((alumno)=>{
    return alumno.nombre.includes("a");
});

console.log(alumnoEncontrado);