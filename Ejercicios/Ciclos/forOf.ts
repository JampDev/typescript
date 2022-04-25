interface Usuario{
    nombre:string,
    apellido:string
}

var usuarios:Array<Usuario> = [
    {
        nombre: 'Ana',
        apellido: 'Carcamo'
    },
    {
        nombre: 'Lupita',
        apellido: 'Juarez'
    },
    {
        nombre: 'Elmer',
        apellido: 'Martínez'
    }
]

console.log(usuarios);

//Como un foreach de java
for(let usr of usuarios){
    console.log("Hola of: ", usr.apellido);
}