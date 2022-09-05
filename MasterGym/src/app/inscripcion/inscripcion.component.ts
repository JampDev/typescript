import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cliente } from '../models/cliente';
import { Inscripcion } from '../models/inscripcion';
import { Precio } from '../models/precio';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  inscripcion: Inscripcion = new Inscripcion();
  precios: Precio[] = new Array<Precio>();
  clienteSeleccionado: Cliente = new Cliente();
  precioSeleccionado: Precio = new Precio();
  idPrecio: string = "null";
  constructor(private db: AngularFirestore, private msj:MensajesService) { }

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

  asignarCliente(cliente: any) {
    console.log(cliente);
    this.inscripcion.cliente = cliente.ref;
    this.clienteSeleccionado = cliente;
  }

  eliminarCliente() {
    this.clienteSeleccionado = new Cliente();
    this.inscripcion.cliente = undefined;
  }

  guardar() {
    if (this.inscripcion.validar().esValido) {
      let inscripcion = {
        fecha: this.inscripcion.fecha,
        fechaFin: this.inscripcion.fechaFin,
        cliente: this.inscripcion.cliente,
        precio: this.inscripcion.precio,
        subTotal: this.inscripcion.subTotal,
        iva: this.inscripcion.iva,
        total: this.inscripcion.total
      }
      this.db.collection('inscripcion').add(inscripcion).then(rsl => {
        this.inscripcion = new Inscripcion();
        this.clienteSeleccionado = new Cliente();
        this.precioSeleccionado = new Precio();      
        this.idPrecio = "null";
        this.msj.mensajeExito('Guardado', 'Se guardo correctamente');
      });
    } else {
      this.msj.mensajeAdvertencia('Advertencia', this.inscripcion.validar().mensaje);
    }
  }

  seleccionarPrecio(event: any) {
    let id = event.target.value;
    if (id != null && id != "null") {
      this.precioSeleccionado = this.precios.find(prc => prc.id == id);
      this.inscripcion.precio = this.precioSeleccionado.ref;
      this.inscripcion.fecha = new Date();

      this.inscripcion.subTotal = this.precioSeleccionado.costo;
      this.inscripcion.iva = this.inscripcion.subTotal * 0.12;
      this.inscripcion.total = this.inscripcion.subTotal + this.inscripcion.iva;

      if (this.precioSeleccionado.tipoDuracion == 1) {
        let dias: number = this.precioSeleccionado.duracion;
        let anio: number = this.inscripcion.fecha.getFullYear();
        let mes: number = this.inscripcion.fecha.getMonth();
        let dia: number = this.inscripcion.fecha.getDate();
        let fechaFinal = new Date(anio, mes,
          dia + dias);
        this.inscripcion.fechaFin = fechaFinal;
      } else if (this.precioSeleccionado.tipoDuracion == 2) {
        let dias: number = this.precioSeleccionado.duracion * 7;
        let anio: number = this.inscripcion.fecha.getFullYear();
        let mes: number = this.inscripcion.fecha.getMonth();
        let dia: number = this.inscripcion.fecha.getDate();
        let fechaFinal = new Date(anio, mes,
          dia + dias);
        this.inscripcion.fechaFin = fechaFinal;
      } else if (this.precioSeleccionado.tipoDuracion == 3) {
        let dias: number = this.precioSeleccionado.duracion * 15;
        let anio: number = this.inscripcion.fecha.getFullYear();
        let mes: number = this.inscripcion.fecha.getMonth();
        let dia: number = this.inscripcion.fecha.getDate();
        let fechaFinal = new Date(anio, mes,
          dia + dias);
        this.inscripcion.fechaFin = fechaFinal;
      } else if (this.precioSeleccionado.tipoDuracion == 4) {
        let meses: number = this.precioSeleccionado.duracion;
        let anio: number = this.inscripcion.fecha.getFullYear();
        let mes: number = this.inscripcion.fecha.getMonth();
        let dia: number = this.inscripcion.fecha.getDate();
        let fechaFinal = new Date(anio, mes + meses,
          dia);
        this.inscripcion.fechaFin = fechaFinal;
      } else if (this.precioSeleccionado.tipoDuracion == 5) {
        let anio: number = this.inscripcion.fecha.getFullYear() + this.precioSeleccionado.duracion;
        let mes: number = this.inscripcion.fecha.getMonth();
        let dia: number = this.inscripcion.fecha.getDate();
        let fechaFinal = new Date(anio, mes,
          dia);
        this.inscripcion.fechaFin = fechaFinal;
      }
    } else {
      this.precioSeleccionado = new Precio();
      this.inscripcion.precio = null;

      this.inscripcion.subTotal = 0;
      this.inscripcion.iva = 0;
      this.inscripcion.total = 0;

      this.inscripcion.fecha = null;
      this.inscripcion.fechaFin = null;
    }
  }
}
