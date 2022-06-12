import { Component, OnInit } from '@angular/core';

interface Articulo {
  nombre: string,
  descripcion: string,
  precio: number
}

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor() { }

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre: 'Televisor de 24 pulgadas',
        descripcion: 'Marca Dell',
        precio: 1500
      },
      {
        nombre: 'Laptop i5',
        descripcion: 'Laptop marca Dell',
        precio: 2000
      },
      {
        nombre: 'Monitor',
        descripcion: 'Monitor curvo 4k',
        precio: 400
      }
    )
  }

}
