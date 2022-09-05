import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cliente } from '../models/cliente';
import { Inscripcion } from '../models/inscripcion';
import { Precio } from '../models/precio';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  inscripcion:Inscripcion = new Inscripcion();
  precios: Precio[] = new Array<Precio>();
  clienteSeleccionado: Cliente = new Cliente();
  precioSeleccionado:Precio = new Precio();
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('precios').get().subscribe(rsl => {
      rsl.docs.forEach(item => {        
        let precio = item.data() as Precio;
        precio.id = item.id;
        precio.ref = item.ref;
        this.precios.push(precio);
      });
    });
  }

  asignarCliente(cliente:any){
    console.log(cliente);
    this.inscripcion.cliente = cliente.ref;
    this.clienteSeleccionado = cliente;
  }

  eliminarCliente(){
    this.clienteSeleccionado = new Cliente();
    this.inscripcion.cliente = undefined;
  }

  guardar(){
    console.log(this.inscripcion);
  }

  seleccionarPrecio(event:any){
    let id = event.target.value;
    this.precioSeleccionado = this.precios.find(prc => prc.id == id);
    this.inscripcion.precio = this.precioSeleccionado.ref;
    console.log(this.precioSeleccionado);
  }
}
