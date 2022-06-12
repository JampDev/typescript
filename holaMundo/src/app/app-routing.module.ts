import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipeComponent } from './pipe/pipe.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarUsuarioComponent } from './usuarios/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: TitulosComponent },
  { path: 'pipes', component: PipeComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: 'directiva', component: DirectivaComponent },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    children: [{
      path: 'agregar', component: AgregarUsuarioComponent
    },
    {
      path: 'editar', component: EditarUsuarioComponent
    }]
  },
  { path: 'articulo', component: ArticuloComponent},
  { path: '**', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
