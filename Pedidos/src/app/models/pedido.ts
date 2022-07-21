import { PedidoDetalle } from "./pedido-detalle";
import { Producto } from "./producto";

export class Pedido {
    pedidoId: number;
    clienteId: number;
    clienteNombre: string;
    total: number;
    pedidoDetalle: Array<PedidoDetalle>

    constructor(datos?: Pedido) {
        if (datos != null) {
            this.pedidoId = datos.pedidoId;
            this.clienteId = datos.clienteId;
            this.clienteNombre = datos.clienteNombre;
            this.total = datos.total;
            this.pedidoDetalle = datos.pedidoDetalle;
            return;
        }
        this.pedidoId = this.pedidoId;
        this.clienteId = this.clienteId;
        this.clienteNombre = this.clienteNombre;
        this.total = this.total;
        this.pedidoDetalle = new Array<PedidoDetalle>();
    }

    agregarProducto(producto: Producto) {
        let pedidoDtl: PedidoDetalle = new PedidoDetalle();
        pedidoDtl.cantidad = 1;
        pedidoDtl.productoNombre = producto.nombre;
        pedidoDtl.precio = producto.precio;
        pedidoDtl.productoId = producto.id;
        pedidoDtl.total = pedidoDtl.cantidad * pedidoDtl.precio;
        let existe: number = this.pedidoDetalle.filter(p => p.productoId == pedidoDtl.productoId).length;
        if (existe > 0) {
            let pos: number = this.pedidoDetalle.findIndex(p => p.productoId == pedidoDtl.productoId);
            this.pedidoDetalle[pos].cantidad++;
            this.pedidoDetalle[pos].total = this.pedidoDetalle[pos].cantidad * this.pedidoDetalle[pos].precio;
        } else {
            this.pedidoDetalle.push(pedidoDtl);
        }
        this.actualizarTotal();
    }

    private actualizarTotal() {
        this.total = 0;
        this.pedidoDetalle.forEach(p => this.total = this.total + p.total);
    }

    actualizarCantidades(pos:number){
        this.pedidoDetalle[pos].total = this.pedidoDetalle[pos].cantidad * this.pedidoDetalle[pos].precio;
        this.actualizarTotal();
    }
}