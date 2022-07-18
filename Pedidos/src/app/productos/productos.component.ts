import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProductos: Array<Producto> = new Array<Producto>();
  constructor(public productoServicio: ProductosService) { }

  ngOnInit(): void {
    this.listaProductos = this.productoServicio.productosLS;
  }

  buscarProductos(event:any){
    
  }

}
