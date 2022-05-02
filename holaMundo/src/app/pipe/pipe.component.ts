import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  titulo:string = 'Hola Bienvenido!!!';
  dinero:number = 2400;
  ganancias:number = 0.54;
  fechaNacimiento:Date = new Date('12/12/2000');
  parrafo:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis ipsum odio obcaecati a nobis iure? Obcaecati officiis asperiores ea culpa. Eius veniam quis quod quas nam excepturi reprehenderit recusandae.'
  constructor() { }

  ngOnInit(): void {
  }

}
