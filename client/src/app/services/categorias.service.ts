import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categoria} from '../models/Categoria';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  API_URI = 'http://localhost:4040/categorias';
  constructor(private http: HttpClient) { }
  getCategorias() {
    return this.http.get(`${this.API_URI}/list`);
  }
  getSubCategorias(id: string) {
    return this.http.get(`${this.API_URI}/listSub/${id}`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveCategoria(categoria: Categoria) {
    return this.http.post(`${this.API_URI}/new`, categoria);
  }

  updateCategoria(id: string|number, updatedGame: Categoria): Observable<Categoria> {
    return this.http.put(`${this.API_URI}/update/${id}`, updatedGame);
  }
}
