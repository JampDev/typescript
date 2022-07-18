import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'agregar-cliente', component: AgregarClienteComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'agregar-producto', component: AgregarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
