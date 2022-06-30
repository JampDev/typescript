import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../Models/articulo';
import { User } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  articulo: Articulo = new Articulo();
  url: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {

  }

  leerNoticias(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.url + '/posts');
  }

  leerUsuario(usuarioId: number): Observable<User>{
    return this.http.get<User>(this.url + '/users/' + usuarioId);
  }

}
