import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;    
  excelencia: boolean;
  constructor(nombre:string, apellido:string, excelencia:boolean){
    this.nombre = nombre;
    this.apellido = apellido;
    this.excelencia = excelencia;
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  alumno:Alumno = new Alumno('','', false);
  listadoAlumnos: Array<Alumno> = new Array<Alumno>();
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listadoAlumnos.push(this.alumno);
    this.alumno = new Alumno('','', false);
    console.log(this.listadoAlumnos);
  }
}
