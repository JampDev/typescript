import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  datosFormulario: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private fb: FormBuilder, public clienteServicio: ClientesService) { }

  ngOnInit(): void {
    this.datosFormulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required] 
    });
  }

  agregar(){
    this.cliente = this.datosFormulario.value as Cliente;
    this.clienteServicio.agregaClienteLS(this.cliente);
    this.datosFormulario.reset();
  }

}
