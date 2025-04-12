import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alqui } from '../../../models/alquiler';
import { Lect } from '../../../models/lector';
import { Lib } from '../../../models/libr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlquiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  agregarAlquiler(alquiler: Alqui): Observable<Alqui> {
    return this.http.post<Alqui>(`${this.apiUrl}/alquileres/InsertAlqui`, alquiler);
  }

  obtenerLector(): Observable<Lect[]> {
    return this.http.get<Lect[]>(`${this.apiUrl}/lectores/ListLect`);
  }

  obtenerLibro(): Observable<Lib[]> {
    return this.http.get<Lib[]>(`${this.apiUrl}/libros/ListBook`);
  }

  listarAlquiler(): Observable<any> {
    return this.http.get(`${this.apiUrl}/alquileres/ListAlqui`);
  }

  deleteAlquiler(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/alquileres/DeleteAlqui/${id}`);
  }
}
