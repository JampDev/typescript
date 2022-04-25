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

//Aqui no declaro un item, sino la posicion
for(let posicion in usuarios){
    console.log(usuarios[posicion].nombre);
}