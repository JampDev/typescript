var numerosEnviados = 50;
switch (numerosEnviados) {
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
var TipoMenu;
(function (TipoMenu) {
    TipoMenu[TipoMenu["CANCIONES"] = 1] = "CANCIONES";
    TipoMenu[TipoMenu["ALBUMS"] = 2] = "ALBUMS";
    TipoMenu[TipoMenu["PERFIL"] = 3] = "PERFIL";
})(TipoMenu || (TipoMenu = {}));
var menu = 3;
switch (menu) {
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
