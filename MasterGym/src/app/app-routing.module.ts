import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ListaIncripcionesComponent } from './lista-incripciones/lista-incripciones.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { PreciosComponent } from './precios/precios.component';

const routes: Routes = [
  {path: '', redirectTo: 'inscripcion', pathMatch: 'full'},
  {path: 'inscripcion', component: InscripcionComponent},
  {path: 'listado-clientes', component: ListadoClientesComponent},
  {path: 'agregar-cliente', component: AgregarClienteComponent},
  {path: 'agregar-cliente/:clienteId', component: AgregarClienteComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'lista-inscripciones', component: ListaIncripcionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
