import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  datosFormulario: FormGroup;

  constructor(private fb: FormBuilder, public productoServicio: ProductosService) { }

  ngOnInit(): void {
    this.datosFormulario = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  agregar(){
    this.productoServicio.agregaProductoLS(this.datosFormulario.value as Producto);
    this.datosFormulario.reset();
  }
}
