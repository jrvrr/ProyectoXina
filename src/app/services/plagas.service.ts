import { Injectable } from '@angular/core';
import { environments } from '../environments/environments'; // Asegúrate de que la ruta sea correcta
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Plaga } from '../interfaces/plaga.interface'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class PlagasService {
  private baseUrl: string = environments.baseURL; // URL base del backend

  constructor(private http: HttpClient) {} // Permite hacer solicitudes HTTP

  // Método para obtener todas las plagas
  getPlagas(): Observable<Plaga[]> {
    return this.http.get<Plaga[]>(`${this.baseUrl}/plagas`);
  }

  // Método para obtener una plaga por su ID
  getPlagaById(id: string): Observable<Plaga | undefined> {
    return this.http.get<Plaga>(`${this.baseUrl}/plagas/${id}`).pipe(
      catchError((error) => of(undefined)) // Si ocurre un error, devuelve "undefined"
    );
  }

  // Método para buscar plagas por nombre (sugerencias)
  getSuggestions(query: string): Observable<Plaga[]> {
    return this.http.get<Plaga[]>(`${this.baseUrl}/plagas?nombre_like=${query}&_limit=6`);
  }

  // Método para agregar una nueva plaga
  addPlaga(plaga: Plaga): Observable<Plaga> {
    return this.http.post<Plaga>(`${this.baseUrl}/plagas`, plaga);
  }

  // Método para actualizar una plaga existente
  updatePlaga(plaga: Plaga): Observable<Plaga> {
    if (!plaga.id) throw Error('El ID de la plaga es requerido');
    return this.http.patch<Plaga>(`${this.baseUrl}/plagas/${plaga.id}`, plaga);
  }

  // Método para eliminar una plaga por su ID
  deletePlagaById(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/plagas/${id}`).pipe(
      catchError((err) => of(false)), // Si ocurre un error, devuelve "false"
      map((resp) => true) // Si la eliminación es exitosa, devuelve "true"
    );
  }
}