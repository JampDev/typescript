var esNuevo:boolean = false;
var deseaImprimir:boolean = true;
var aceptaDescuento:boolean = (15 + 18 == 33);
console.log("Este booleano es: " + aceptaDescuento);

var juan = "juan";
var juan2 = "juan";

var sonNombresIguales:boolean = (juan == juan2);
console.log("Este booleano es: " + sonNombresIguales);

var sonAmbosVerdaderos:boolean = sonNombresIguales && aceptaDescuento;
console.log("El resultado de 2 booleanos es: " + sonAmbosVerdaderos);

var listaNumeros1:number = 100;
var listaNumeros2:number = 120;

var tamaniosIguales:boolean = (listaNumeros1 == listaNumeros2);
console.log("El tamaño de las listas son iguales " + tamaniosIguales);


