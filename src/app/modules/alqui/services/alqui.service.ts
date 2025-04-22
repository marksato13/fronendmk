import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alqui } from '../../../models/alquiler';
import { Lect } from '../../../models/lector';
import { Lib } from '../../../models/libr';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlquiService {

  private apiUrl = `${environment.apiUrl}/alquileres`;
  private proyectoUrl = `${environment.apiUrl}/libros`;
  private xUrl = `${environment.apiUrl}/lectores`;

  constructor(public http: HttpClient) {}

  agregarAlquiler(alquiler: Alqui): Observable<Alqui> {
    return this.http.post<Alqui>(`${this.apiUrl}/InsertAlqui`, alquiler);
  }

  obtenerLector(): Observable<Lect[]> {
    return this.http.get<Lect[]>(`${this.xUrl}/ListLect`);
  }

  obtenerLibro(): Observable<Lib[]> {
    return this.http.get<Lib[]>(`${this.proyectoUrl}/ListBook`);
  }

  listarAlquiler(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListAlqui`);
  }

  deleteAlquiler(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteAlqui/${id}`);
  }
}
