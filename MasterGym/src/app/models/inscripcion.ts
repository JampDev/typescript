import { DocumentReference } from "firebase/firestore";



export class Inscripcion{
    id: string;
    fecha: Date;
    fechaFin: Date;
    cliente: DocumentReference;
    precio: DocumentReference;
    subTotal: number;
    iva:number;
    total:number;
    
    constructor(){
        this.fecha = null;
        this.fechaFin = null;
        this.cliente = this.cliente;
        this.precio = this.precio;
        this.subTotal = null ;
        this.iva = null;
        this.total = null;
    }

    validar():any{
        let respuesta = {
            esValido: false,
            mensaje: ''
        }
        if(this.cliente == null || this.cliente == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'Seleccione un cliente';
            return respuesta;
        }
        if(this.precio == null || this.precio == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No a seleccionado un precio';
            return respuesta;
        }
        if(this.subTotal <= 0 || this.subTotal == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No se pudo calcular el subtotal';
            return respuesta;
        }
        if(this.iva <= 0 || this.iva == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No se pudo calcular el iva';
            return respuesta;
        }
        if(this.total <= 0 || this.total == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No se pudo calcular el total';
            return respuesta;
        }
        if(this.fecha == null || this.fecha == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No tiene fecha de inicio';
            return respuesta;
        }
        if(this.fechaFin == null || this.fechaFin == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No tiene fecha fin';
            return respuesta;
        }        
        respuesta.esValido = true;
        return respuesta;
    }
}