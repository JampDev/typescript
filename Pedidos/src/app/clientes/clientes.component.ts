import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCliente() {
    let clientes: Array<Cliente> = new Array<Cliente>();
    clientes.push(
      {
        nombre: 'Ana',
        apellido: 'Lopez',
        edad: 25
      },
      {
        nombre: 'Alfonso',
        apellido: 'Pérez',
        edad: 28
      });
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  guardarProducto() {
    let productos: Array<Producto> = new Array<Producto>();
    productos.push(
      {
        nombre: 'Maíz',
        precio: 25
      },
      {
        nombre: 'Agua de Botellon',
        precio: 2
      });
    localStorage.setItem('productos', JSON.stringify(productos));
  }

  eliminarCliente() {
    localStorage.removeItem('clientes');
  }

  eliminarProducto() {
    localStorage.removeItem('productos');
  }

  eliminarTodo() {
    localStorage.clear();
  }

  get clientesLocales(): Cliente[] {
    let clientesLS: Cliente[] = JSON.parse(localStorage.getItem('clientes')!);
    if (clientesLS == null) {
      return new Array<Cliente>();
    }
    return clientesLS;
  }

  get productosLocales(): Producto[] {
    let productosLS: Producto[] = JSON.parse(localStorage.getItem('productos')!);
    if (productosLS == null) {
      return new Array<Producto>();
    }
    return productosLS;
  }
}
