import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { PedidosService } from '../services/pedidos.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProductos: Array<Producto> = new Array<Producto>();
  constructor(public productoServicio: ProductosService,
    public pedidosServicio: PedidosService) { }

  ngOnInit(): void {
    this.listaProductos = this.productoServicio.productosLS;
  }

  buscarProductos(event:any){
    this.listaProductos = this.productoServicio.productosLS.filter(prd => {
      return prd.nombre.toLowerCase().includes(event.target.value.toLowerCase());
    })
  }

  agregar(producto: Producto){
    this.pedidosServicio.pedido.agregarProducto(producto);
    this.pedidosServicio.guardarLS();
    console.log(this.pedidosServicio.pedido);
    alert('Producto Agregado');
  }

}
