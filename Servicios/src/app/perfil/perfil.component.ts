import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public UsuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.UsuarioInyectado.usuario.nombre = 'Alfonso';
  }

}
