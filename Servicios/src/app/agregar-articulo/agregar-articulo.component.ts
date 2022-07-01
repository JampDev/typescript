import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../Models/articulo';
import { User } from '../Models/users';
import { ArticulosService } from '../Services/articulos.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css']
})
export class AgregarArticuloComponent implements OnInit {

  usuarios: Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new Articulo();
  esNuevo: boolean = true;
  titulo: string = '';
  constructor(public ArticuloInyectado: ArticulosService,
    private fbGenerador: FormBuilder,
    private RutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

    this.esNuevo = JSON.parse(this.RutaActiva.snapshot.params?.['esNuevo']) ;
    this.titulo = this.esNuevo ? 'Agregar' : 'Editar';

    this.formularioArticulo = this.fbGenerador.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    });

    if(!this.esNuevo){
      this.articulo = this.ArticuloInyectado.articulo;
      this.formularioArticulo.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId
      })
    }

    this.ArticuloInyectado.leerTodosUsuarios()
        .subscribe((usuarios)=>{
          this.usuarios = usuarios;
    });
  }

  agregar(){
    this.articulo = this.formularioArticulo.value as Articulo;
    this.ArticuloInyectado.guardarArticulo(this.articulo).subscribe((articuloCreado)=>{
      console.log('Articulo agregado');
    });
    this.formularioArticulo.reset();
  }

  editar(){
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articulo.id = this.ArticuloInyectado.articulo.id;
    this.ArticuloInyectado.editarArticulo(this.articulo).subscribe((art)=>{
      console.log(art);
      console.log('Articulo editado');
    });
  }
}
