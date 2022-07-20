import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido: Pedido = new Pedido();

  constructor() { }
}
