import { Component, OnInit } from '@angular/core';
import { Articulo } from '../Models/articulo';
import { User } from '../Models/users';
import { ArticulosService } from '../Services/articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo: Articulo = new Articulo();
  usuario: User = new User();
  constructor(public ArticuloInyectado: ArticulosService) { 
    this.articulo = ArticuloInyectado.articulo;
  }

  ngOnInit(): void {
    this.ArticuloInyectado.leerUsuario(this.articulo.userId)
        .subscribe((userApi)=>{
          this.usuario = userApi;
        });
  }

}
