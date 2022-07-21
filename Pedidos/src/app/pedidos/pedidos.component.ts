import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosServicio: PedidosService) { }

  ngOnInit(): void {

  }

  calcularTotal(pos: number) {
    this.pedidosServicio.pedido.actualizarCantidades(pos);
    this.pedidosServicio.guardarLS();
  }

  guardar(){
    this.pedidosServicio.guardarPedido();
  }

  eliminar(pos:number){
    this.pedidosServicio.pedido.pedidoDetalle.splice(pos, 1);
    this.pedidosServicio.guardarLS;
  }
}
