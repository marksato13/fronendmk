import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libr } from '../../../models/libro';
import { Autr } from '../../../models/autor';
import { Editor } from '../../../models/editorial';
import { Cate } from '../../../models/categoria';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = `${environment.apiUrl}/libros`;
  private autoresUrl = `${environment.apiUrl}/autores`;
  private editorialesUrl = `${environment.apiUrl}/editoriales`;
  private categoriasUrl = `${environment.apiUrl}/categorias`;


  constructor(public http: HttpClient) {}

  agregarLibro(libro: Libr): Observable<Libr> {
    return this.http.post<Libr>(`${this.apiUrl}/InsertLibro`, libro);
  }
//fora
  obtenerAutores(): Observable<Autr[]> {
    return this.http.get<Autr[]>(`${this.autoresUrl}/ListAutores`);
  }

  obtenerEditoriales(): Observable<Editor[]> {
    return this.http.get<Editor[]>(`${this.editorialesUrl}/ListEdi`);
  }

  obtenerCategorias(): Observable<Cate[]> {
    return this.http.get<Cate[]>(`${this.categoriasUrl}/ListCate`);
  }

  listarLibros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListBook`);
  }

//DeleteBook
  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteBook/${id}`);
  }

  actualizarLibro(id: number, libro: Libr): Observable<Libr> {
    return this.http.put<Libr>(`${this.apiUrl}/EditBook/${id}`, libro);
  }
  
obtenerLibroPorId(id: number): Observable<Libr> {
  return this.http.get<Libr>(`${this.apiUrl}/ListAutores/${id}`);
}
listarLibrosPorCategoria(categoriaId: number): Observable<Libr[]> {
  return this.http.get<Libr[]>(`${this.apiUrl}/ListEdi/${categoriaId}`);
}
listarLibrosPorAutor(autorId: number): Observable<Libr[]> {
  return this.http.get<Libr[]>(`${this.apiUrl}/ListCate/${autorId}`);
}

}
  