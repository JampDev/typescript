import { DocumentReference } from "firebase/firestore";



export class Inscripcion{
    fecha: Date;
    fechaFin: Date;
    cliente: DocumentReference;
    precio: DocumentReference;
    subTotal: number;
    iva:number;
    total:number;
    
    constructor(){
        this.fecha = this.fecha;
        this.fechaFin = this.fechaFin;
        this.cliente = this.cliente;
        this.precio = this.precio;
        this.subTotal = this.subTotal;
        this.iva = this.iva;
        this.total = this.total;
    }
}