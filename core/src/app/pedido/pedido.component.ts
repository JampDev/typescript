import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();

  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.pedido.pedidoDetalle.push({
      cantidad: 20,
      precio: 15,
      producto: 'Agua',
      total: 300
    })
    Swal.fire({
      title: 'Producto Agregado',
      text: 'Se agrego correctamente',
      icon: 'success'
    });
  }

  elHijoEliminoAlgo(event: any){
    this.pedido.pedidoDetalle.splice(event.id, 1);
    Swal.fire({
      title: 'Producto Eliminado',
      text: 'Se elimino correctamente',
      icon: 'warning'
    });
  }

}
