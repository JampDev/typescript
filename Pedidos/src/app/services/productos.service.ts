import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregaProductoLS(producto: Producto){    
    let productosGuardados: Producto[] = this.productosLS;
    producto.id = productosGuardados.length + 1;
    productosGuardados.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosGuardados));
  }

  get productosLS(): Producto[]{
    let listaProductos: Producto[] = JSON.parse(localStorage.getItem("productos")!);
    if(listaProductos == null){
      return new Array<Producto>();
    }
    return listaProductos;
  }
}
