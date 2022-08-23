import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  datosFormulario: FormGroup;
  porcentajeCarga: number = 0;

  constructor(private fb: FormBuilder, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.datosFormulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      cedula: [''],
      fechaNacimiento: ['', Validators.required],
      telefono: [''],
      imgUrl: ['', Validators.required],
    });
  }

  agregar() {
    console.log(this.datosFormulario.value);
  }

  subirImagen(evento: any) {
    let archivo = evento.target.files[0];
    let nombre = new Date().getTime().toString();
    let extension = archivo.name.toString().substring(archivo.name.toString().lastIndexOf('.'));
    let ruta = 'clientes/' + nombre + extension;
    const referencia = this.storage.ref(ruta);
    const tarea = referencia.put(archivo);
    tarea.then(obj => {
      console.log('Imagen subida');
      referencia.getDownloadURL().subscribe(url => {
        console.log(url);
      });
    });
    tarea.percentageChanges().subscribe(porcentaje => {
      this.porcentajeCarga = parseInt(porcentaje.toString());
    });


  }
}
