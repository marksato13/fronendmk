import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lect } from '../../../models/lector';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LectoresService {

  private URL: string = `${environment.apiUrl}/lectores`;
  constructor(public http: HttpClient) {}

  public getAllLector(): Observable<Lect[]> {
    return this.http.get<Lect[]>(`${this.URL}/ListLect`);
  } 

  public getLectorById(id: number): Observable<Lect> {
    return this.http.get<Lect>(`${this.URL}/BuscarLect/${id}`);
  }

  public createLector(lector: Lect): Observable<Lect> {
    return this.http.post<Lect>(`${this.URL}/InsertLect`,lector);
  }

  public updateLector(id: number, lector: Lect): Observable<Lect> {
    return this.http.put<Lect>(`${this.URL}/EdidLect/${id}`,lector);
  }

  public deleteLector(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/DeleteLect/${id}`);
  }
}
