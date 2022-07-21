import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaClientes: Array<Cliente> = new Array<Cliente>();

  constructor(public clienteServicio: ClientesService,
    public pedidosServicio: PedidosService,
    public route: Router) { }

  ngOnInit(): void {
    this.listaClientes = this.clienteServicio.clientesLS;
  }

  buscarClientes(event:any){
    let cadena = event.target.value.toLowerCase();
    this.listaClientes = this.clienteServicio.clientesLS.filter(x => {
      if(x.nombre.toLowerCase().includes(cadena) || x.apellido.toLowerCase().includes(cadena)){
        return x;
      }     
      return null;   
    });
  }

  irProductos(cliente: Cliente){
    this.pedidosServicio.pedido.clienteId = cliente.id;
    this.pedidosServicio.pedido.clienteNombre = cliente.nombre + ' ' + cliente.apellido;
    this.pedidosServicio.guardarLS();
    this.route.navigateByUrl("/productos");
  }

}
