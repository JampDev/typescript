interface Personas {
    nombre: string,
    apellido: string,
    edad: number,
    peso: number
}

var persona1:Personas = {
    nombre: "Alfonso",
    apellido: "Pérez",
    edad: 25,
    peso: 100
};

console.log(persona1.nombre);