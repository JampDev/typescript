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
console.log(usuarios);
//Como un foreach de java
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var usr = usuarios_1[_i];
    console.log("Hola of: ", usr.apellido);
}
