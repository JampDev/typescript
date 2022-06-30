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
    this.ArticuloInyectado.leerNoticias().subscribe((articulosApi)=>{
      this.articulos = articulosApi;
    });
  }

  irDetalle(articulo:Articulo){
    this.ArticuloInyectado.articulo = articulo;
    this.routa.navigateByUrl('/articulo-detalle');
  }

}
