var numerosEnviados:number = 50;

switch(numerosEnviados){
    case 25:
        console.log("Son veinte y cinco");
        break;
    case 20:
        console.log("Son veinte");
        break;
    case 15:
        console.log("Son quince");
        break;
    default:
        console.log("No se cumplio ninguna condicion");
}

//Si no se iguala, por defecto el orden sería 1, 2, 3, .....
enum TipoMenu{
    CANCIONES = 1,
    ALBUMS,
    PERFIL
}


var menu:number = 3;

switch(menu){
    case TipoMenu.CANCIONES:
        console.log("Accede a las canciones");
        break;
    case TipoMenu.ALBUMS:
        console.log("Accede a los albums");
        break;
    case TipoMenu.PERFIL:
        console.log("Accede al perfil");
        break;
    default:
        console.log("El menú no existe");
}