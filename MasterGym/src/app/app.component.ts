import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MasterGym';
  usuario: firebase.User;
  cargando: boolean = true;

  constructor(public auth: AngularFireAuth){
    this.auth.user.subscribe((usr) => {
      this.cargando = false;
      this.usuario = usr;
    });
  }

  login() {
    this.auth.signInWithEmailAndPassword('admuser@gmail.com', 'admuser');
  }
  logout() {
    this.auth.signOut();
  }

}
