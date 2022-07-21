import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidoDetalle } from '../models/pedido-detalle';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido: Pedido = new Pedido();

  constructor() { 
    this.pedido = this.ultimoPedido;
  }

  guardarLS(){
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido));
  }

  get ultimoPedido(): Pedido{
    let pedidoLS: Pedido = new Pedido(JSON.parse(localStorage.getItem("ultimoPedido")!));
    if(pedidoLS == null){
      return new Pedido();
    }else{
      return pedidoLS;
    }
  }

  guardarPedido(){
    let listaPedidos: Pedido[] = new Array<Pedido>();
    listaPedidos = this.getPedidos;
    this.pedido.pedidoId = listaPedidos.length + 1;
    listaPedidos.push(this.pedido);
    localStorage.setItem("pedidos",JSON.stringify(listaPedidos));
    localStorage.removeItem('ultimoPedido');
    this.pedido = new Pedido(null!);
  }

  get getPedidos(): Pedido[]{
    let pedidos: Pedido[] = JSON.parse(localStorage.getItem("pedidos")!);
    if(pedidos == null){
      return new Array<Pedido>();
    }
    return pedidos.sort((a, b) => b.pedidoId - a.pedidoId);
  }
}
