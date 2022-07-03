import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Cliente> = new Array<Cliente>();

  constructor() { }

  ngOnInit(): void {
    /*
    this.clientes.push(
      {
        nombre: 'Luis',
        apellido: 'Lopez',
        edad: 25
      },
      {
        nombre: 'Alfonso',
        apellido: 'Pérez',
        edad: 26
      }
    );
    */
  }

  guardarCliente(){
    localStorage.setItem('clientes',JSON.stringify(this.clientes));
  }

  leerClientes(){
    this.clientes = JSON.parse(localStorage.getItem('clientes')!);
  }
}
