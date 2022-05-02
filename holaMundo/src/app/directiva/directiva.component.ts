import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

interface Producto{
  nombre:string;
  stock: number;
  fabricante: string;
  fechaVencimiento: Date;
  esImportante: boolean;
  textoGrande: boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  pestania: string = '';
  cargando:boolean = true;
  mostrarCuadrado:boolean = false;
  nombres:Array<string> = ["María", "Ana", "Jorge", "Luis"];
  productos:Array<Producto> = [
    {
      nombre: "Arroz",
      stock: 15,
      fabricante: "Distribuidor Industrial",
      fechaVencimiento: new Date("04/15/2022"),
      esImportante: true,
      textoGrande: true
    },
    {
      nombre: "Maíz",
      stock: 25,
      fabricante: "Distribuidor Industrial",
      fechaVencimiento: new Date("04/15/2022"),
      esImportante: false,
      textoGrande: true
    },
    {
      nombre: "Refrescos",
      stock: 300,
      fabricante: "Coca Cola",
      fechaVencimiento: new Date("12/15/2022"),
      esImportante: true,
      textoGrande: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.cargando = false;
    }, 5000);
  }

  alternar(){
    this.cargando = !this.cargando;
  }

  cambiarPestania(pestania:string){
    this.pestania = pestania;
  }

  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }
}
