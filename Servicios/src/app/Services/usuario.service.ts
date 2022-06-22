import { Injectable } from '@angular/core';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario = new Usuario();
  constructor() { 
    this.usuario.usuarioId = 1;
    this.usuario.nombre = 'Jonathan';
    this.usuario.apellido = 'Morocho'
  }
}
