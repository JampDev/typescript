import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push(
      {
        nombre: 'Televisor de 24 pulgadas',
        descripcion: 'Marca Dell',
        precio: 1500,
        stock: 10,
        precioMayorista: 1300
      },
      {
        nombre: 'Laptop i5',
        descripcion: 'Laptop marca Dell',
        precio: 2000,
        stock: 20,
        precioMayorista: 1000
      },
      {
        nombre: 'Monitor',
        descripcion: 'Monitor curvo 4k',
        precio: 400,
        stock: 10,
        precioMayorista: 365
      }
    )
  }

  pasarParametro(articuloRecibido:Articulo){
    this.ruta.navigate(['articuloDetalle',{articulo: JSON.stringify(articuloRecibido)}]);
  }

}
