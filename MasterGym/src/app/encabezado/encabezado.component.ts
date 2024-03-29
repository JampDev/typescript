import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  isCollapsed:boolean = true;
  usuario: firebase.User;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut();
  }

}
