var usuarios = [
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
];
//Aqui no declaro un item, sino la posicion
for (var posicion in usuarios) {
    console.log(usuarios[posicion].nombre);
}
