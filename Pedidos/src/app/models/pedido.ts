import { PedidoDetalle } from "./pedido-detalle";

export class Pedido{
    pedidoId: number;
    clienteId: number;
    clienteNombre: string;
    total: number;
    pedidoDetalle: Array<PedidoDetalle>

    constructor(){
        this.clienteId = this.clienteId;
        this.clienteNombre = this.clienteNombre;
        this.total = this.total;
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }
}