import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipeComponent } from './pipe/pipe.component';
import { ContinuaraPipe } from './continuara.pipe';
import { Pagina404Component } from './pagina404/pagina404.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './usuarios/agregar-usuario/agregar-usuario.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    EjemploComponent,
    PipeComponent,
    ContinuaraPipe,
    Pagina404Component,
    EncabezadoComponent,
    UsuariosComponent,
    EditarUsuarioComponent,
    AgregarUsuarioComponent,
    ArticuloComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
