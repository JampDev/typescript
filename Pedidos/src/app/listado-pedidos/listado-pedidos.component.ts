import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.css']
})
export class ListadoPedidosComponent implements OnInit {

  listaPedidos: Pedido[] = new Array<Pedido>();

  constructor(public pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.listaPedidos = this.pedidoService.getPedidos;
  }

}
