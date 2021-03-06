import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  /*
  nombre:string = '';
  precio:number = 0;
  */

  articulo: Articulo;
  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.articulo = JSON.parse(this.rutaActiva.snapshot.params.articulo);
  }

}
