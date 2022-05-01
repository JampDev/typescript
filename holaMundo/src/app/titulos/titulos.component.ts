import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  nombre:string = 'María';
  apellido:string = "Pérez";
  alumno:any = {
    nombre: 'Carlos',
    apellido: 'Pineda',
    edad: 21
  }

  imagen:string = "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg";
  soyInput:string = "Nombre aquí";

  correo:string = '';
  contrasenia:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.correo);
    console.log(this.contrasenia);
  }
}
