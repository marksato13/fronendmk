import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autr } from '../../../models/autor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  public URL: string = `${environment.apiUrl}/autores`;
  
  constructor(public http: HttpClient) {}

  public getAllAutor(): Observable<Autr[]> {
    return this.http.get<Autr[]>(`${this.URL}/ListAutores`);
  } 

  public getAutorById(id: number): Observable<Autr> {
    return this.http.get<Autr>(`${this.URL}/BuscarAutores/${id}`);
  }

  public createAutor(autor: Autr): Observable<Autr> {
    return this.http.post<Autr>(`${this.URL}/InsertAutores`, autor);
  }

  public updateAutor(id: number, autor: Autr): Observable<Autr> {
    return this.http.put<Autr>(`${this.URL}/EdidAutores/${id}`, autor);
  }

  public deleteAutor(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/DeleteAutores/${id}`);
  }
}
