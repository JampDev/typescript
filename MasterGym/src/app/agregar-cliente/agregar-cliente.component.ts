import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
  urlImagen: string = "";

  constructor(private fb: FormBuilder, private storage: AngularFireStorage,
    private db: AngularFirestore) { }

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
    this.datosFormulario.value.imgUrl = this.urlImagen;
    this.datosFormulario.value.fechaNacimiento = new Date(this.datosFormulario.value.fechaNacimiento);
    console.log(this.datosFormulario.value);
    this.db.collection('clientes').add(this.datosFormulario.value).then((trm) => {
      console.log('Registro Creado');
    });
  }

  subirImagen(evento: any) {
    if (evento.target.files.length > 0) {
      let archivo = evento.target.files[0];
      let nombre = new Date().getTime().toString();
      let extension = archivo.name.toString().substring(archivo.name.toString().lastIndexOf('.'));
      let ruta = 'clientes/' + nombre + extension;
      const referencia = this.storage.ref(ruta);
      const tarea = referencia.put(archivo);
      tarea.then(obj => {
        console.log('Imagen subida');
        referencia.getDownloadURL().subscribe(url => {
          this.urlImagen = url;
        });
      });
      tarea.percentageChanges().subscribe(porcentaje => {
        this.porcentajeCarga = parseInt(porcentaje.toString());
      });
    }
  }
}
