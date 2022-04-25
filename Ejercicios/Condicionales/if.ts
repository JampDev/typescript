var cantidadSolicitada:number = 1;
var deseaImprimir:boolean = true;

debugger
if(deseaImprimir){    
    console.log("Imprime");
    if(cantidadSolicitada > 10){
        console.log("Aplica descuento");
    }else{
        console.log("No aplica descuento");
    }
}

deseaImprimir = false;
deseaImprimir = true;
deseaImprimir = false;
deseaImprimir = false && false;
deseaImprimir = true && true;

