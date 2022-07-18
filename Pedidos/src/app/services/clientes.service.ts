import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregaClienteLS(cliente: Cliente){    
    let clientesGuardados: Cliente[] = this.clientesLS;
    cliente.id = clientesGuardados.length + 1;
    clientesGuardados.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clientesGuardados));
  }

  get clientesLS(): Cliente[]{
    let listaClientes: Cliente[] = JSON.parse(localStorage.getItem("clientes")!);
    if(listaClientes == null){
      return new Array<Cliente>();
    }
    return listaClientes;
  }
}
