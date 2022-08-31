import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { StringLike } from '@firebase/util';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-seleccionar-cliente',
  templateUrl: './seleccionar-cliente.component.html',
  styleUrls: ['./seleccionar-cliente.component.css']
})
export class SeleccionarClienteComponent implements OnInit {

  clientes: Cliente[] = new Array<Cliente>();
  @Input('nombre') nombre:string;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection<any>('clientes').get().subscribe(rsl=>{
      this.clientes.length = 0;
      rsl.docs.forEach(item=>{
        let cliente: any = item.data();
        cliente.id = item.id;
        cliente.ref = item.ref;
        cliente.visible = false;
        this.clientes.push(cliente);        
      });
    });
    console.log(this.clientes);
  }

  buscarClt(event:any){
    let nombre = event.target.value;
    this.clientes.forEach(clt => {
      if(clt.nombre.toLowerCase().includes(nombre.toLowerCase()) ||
      clt.apellido.toLowerCase().includes(nombre.toLowerCase())){
        clt.visible = true;
      }else{
        clt.visible = false;
      }
    })
  }

  seleccionarClt(cliente:Cliente){
    this.nombre = cliente.nombre + cliente.apellido;
    this.clientes.forEach(clt => clt.visible = false)
  }

  limpiar(){
    this.nombre = undefined;
  }

}
