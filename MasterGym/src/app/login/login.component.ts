import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datosFormulario: FormGroup;
  datosCorrectos: boolean = true;
  msjError: string;
  spinner: boolean = false;

  constructor(public fb: FormBuilder, public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.datosFormulario = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  ingresar() {
    if (this.datosFormulario.valid) {
      this.datosCorrectos = true
      this.spinner = true;
      this.auth.signInWithEmailAndPassword(this.datosFormulario.value.email, this.datosFormulario.value.password)
        .then((usr) => {
          console.log(usr);
          this.spinner = false;
        }).catch((err)=>{
          this.datosCorrectos = false;
          this.spinner = false;
          this.msjError = err.message;
        });        
    } else {
      this.datosCorrectos = false;
      this.msjError = 'Por favor, revise que los datos ingresados sean los correctos.'
    }
  }

}
