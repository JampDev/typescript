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

  ingresar(evento:any){
    console.log(evento);
    if(evento.key=="Enter"){
      console.log("Se envió a validar");
    }
    console.log(this.correo);
    console.log(this.contrasenia);
  }

  llamarMensaje(){
    alert('Evento doble clic');
  }

  escribirModelo(){
    console.log(this.contrasenia);
  }

  escribirCorreo(){
    this.contrasenia = this.correo;
    console.log(this.correo);
    console.log(this.contrasenia);
  }


  escribir(evento: any){
    console.log(evento.target.value);
  }

  colorearFondo(evento: any){
    console.log(evento);
    evento.srcElement.style.backgroundColor="red";
  }

  cambiarTamanio(evento:any){
    evento.srcElement.style.width="500px";
    evento.srcElement.style.height="500px";
  }

  reducirTamanio(evento:any){
    evento.srcElement.style.width="200px";
    evento.srcElement.style.height="200px";
  }
}
