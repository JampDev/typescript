import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Precio } from '../models/precio';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  datosFormulario: FormGroup;
  precios: any[] = new Array<Precio>();
  esEditar:boolean = false;
  id:string;

  constructor(private fb: FormBuilder, private db: AngularFirestore,
    private msj: MensajesService) { }

  ngOnInit(): void {
    this.datosFormulario = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tipoDuracion: ['', Validators.required]
    });    
    this.listarPrecios();
  }

  listarPrecios(){
    this.db.collection('precios').get().subscribe(rsl => {
      this.precios.length = 0;
      rsl.docs.forEach(dato => {
        let precio = dato.data() as Precio;
        precio.id = dato.id;
        this.precios.push(precio);
      });
    });
  }

  agregar(){    
    this.db.collection('precios').add(this.datosFormulario.value).then(()=>{
      this.msj.mensajeExito('Agregado', 'Se agrego correctamente');
      this.datosFormulario.reset();
      this.listarPrecios();
    }).catch(()=>{
      this.msj.mensajeError('Error', 'Ocurrio un error');
    });
  }

  seleccionar(precio:Precio){
    console.log(precio);
    this.esEditar = true;
    this.datosFormulario.setValue({
      nombre: precio.nombre,
      costo: precio.costo,
      duracion: precio.duracion,
      tipoDuracion: precio.tipoDuracion
    });
    this.id = precio.id;
  }

  editar(){
    this.db.doc('precios/' + this.id).update(this.datosFormulario.value).then(()=>{
      this.msj.mensajeExito('Editado', 'Se edito correctamente.');    
      this.datosFormulario.reset();
      this.esEditar = false;
      this.listarPrecios();
    }).catch(()=>{
      this.msj.mensajeError('Error', 'Ocurrio un error al editar');
    });
  }
}
