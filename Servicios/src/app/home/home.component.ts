import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../Models/articulo';
import { ArticulosService } from '../Services/articulos.service';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(public UsuarioInyectado: UsuarioService, 
    public ArticuloInyectado: ArticulosService,
    private routa: Router) { }

  ngOnInit(): void {
    this.articulos.push(
      {
        titulo: 'Curso JS',
        descripcion: 'Desarrollo web de 0 a experto',
        fecha: new Date(),
        usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
      },
      {
        titulo: 'Curso Angular',
        descripcion: 'La Biblia de Angular',
        fecha: new Date('04/25/2019'),
        usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
      },
      {
        titulo: 'Curso Spring',
        descripcion: 'Desarrollo de microservicios',
        fecha: new Date(),
        usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
      }
    );
  }

  irDetalle(articulo:Articulo){
    this.ArticuloInyectado.articulo = articulo;
    this.routa.navigateByUrl('/articulo-detalle');
  }

}
