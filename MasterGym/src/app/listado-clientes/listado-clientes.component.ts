import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData  } from '@angular/fire/firestore'; 

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: any[] = new Array<any>();
  constructor(private db: Firestore) {
  }

  ngOnInit(): void {    
    collectionData(collection(this.db, 'clientes')).subscribe(rsl => {
      this.clientes = rsl;
    });
    
  }

}
