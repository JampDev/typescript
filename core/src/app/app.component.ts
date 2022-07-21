import { Component, ElementRef, ViewChild } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'core';
  @ViewChild('inputNombre', {static: true}) inputNombre: ElementRef;
  @ViewChild(HijoComponent, {static: true}) hijo: HijoComponent;

  mostrar(){
    console.log(this.inputNombre.nativeElement.value);
    //this.inputNombre.nativeElement.style.background = "red";
    this.inputNombre.nativeElement.focus();

    this.hijo.titulo = 'Modificando desde el padre';
  }
}
