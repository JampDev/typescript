import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario{
  nombre: string,
  clave: string,
  correo: string
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formularioCreado: FormGroup;
  esNuevo: boolean = true;
  posicionEditar: number = -1;
  usuarios: Array<Usuario> = new Array<Usuario>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formularioCreado = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      clave: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    });
  }

  agregar(){
    this.usuarios.push(this.formularioCreado.value as Usuario);
    this.formularioCreado.reset();
  }
  
  editar(){
    this.usuarios[this.posicionEditar].nombre = this.formularioCreado.value.nombre;
    this.usuarios[this.posicionEditar].correo = this.formularioCreado.value.correo;
    this.usuarios[this.posicionEditar].clave = this.formularioCreado.value.clave;
    this.formularioCreado.reset();
    this.esNuevo = true;
    this.posicionEditar = -1;
  }

  editarUsuario(pos:number){    
    this.formularioCreado.setValue({
      correo: this.usuarios[pos].correo,
      nombre: this.usuarios[pos].nombre,
      clave: this.usuarios[pos].clave
    });
    this.posicionEditar = pos;
    this.esNuevo = false;
  }

  eliminarUsuario(pos:number){
    this.usuarios.splice(pos, 1); //Desde donde, hasta las posiciones a eliminar
  }


}
