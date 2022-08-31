import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  datosFormulario: FormGroup;
  porcentajeCarga: number = 0;
  urlImagen: string = "";
  esEditable: boolean = false;
  id: string;

  constructor(private fb: FormBuilder, private storage: AngularFireStorage,
    private db: AngularFirestore, private actRoute: ActivatedRoute,
    private msj:MensajesService) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['clienteId'];
    if (this.id != undefined) {
      this.esEditable = true;
      this.db.doc<any>('clientes/' + this.id).valueChanges().subscribe(clt => {
        this.datosFormulario.setValue({
          nombre: clt.nombre,
          apellido: clt.apellido,
          correo: clt.correo,
          cedula: clt.cedula,
          fechaNacimiento: new Date(clt.fechaNacimiento.seconds * 1000).toISOString().substring(0, 10),
          telefono: clt.telefono,
          imgUrl: ''
        });
        this.urlImagen = clt.imgUrl;
      });
    }

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
      this.msj.mensajeExito('Agregado','Se agrego correctamente.')
      this.datosFormulario.reset();
    }).catch(() => {
      this.msj.mensajeError('Error', 'Ocurrio un error al agregar.')
    });;
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

  editar() {
    this.datosFormulario.value.imgUrl = this.urlImagen;
    this.datosFormulario.value.fechaNacimiento = new Date(this.datosFormulario.value.fechaNacimiento);
    this.db.doc('clientes/' + this.id).update(this.datosFormulario.value).then(rsl => {
      this.msj.mensajeExito('Editado','Se edito correctamente.')
    }).catch(() => {
      this.msj.mensajeError('Error', 'Ocurrio un error al editar.')
    });
  }
}
