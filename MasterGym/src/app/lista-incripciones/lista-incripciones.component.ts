import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cliente } from '../models/cliente';
import { Inscripcion } from '../models/inscripcion';

@Component({
  selector: 'app-lista-incripciones',
  templateUrl: './lista-incripciones.component.html',
  styleUrls: ['./lista-incripciones.component.css']
})
export class ListaIncripcionesComponent implements OnInit {

  inscripciones: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.inscripciones.length = 0;
    this.db.collection('inscripcion').get().subscribe(rsl => {
      rsl.forEach(inscripcion => {
        let ins = inscripcion.data() as Inscripcion;
        ins.id = inscripcion.id;
        console.log(inscripcion.data());
        //this.db.doc(inscripcion.data().cliente.path).get().subscribe(clt => {
          //ins.clienteObtenido = cliente.data();
        //});
        ins.fecha = new Date(ins.fecha);
        ins.fechaFin = new Date(ins.fechaFin);
        this.inscripciones.push(ins);
      })
    });
  }

}
