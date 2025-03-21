import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: number;
  usuario: string;
  contrasenia: string;
  idrol?: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private _storage: Storage | null = null;
  private apiUrl = 'http://82.29.197.167:3000/api';
  private usuarioActual: Usuario | null = null;

  constructor(private storage: Storage, private http: HttpClient) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    await this.loadCurrentUser();
  }

  async loadCurrentUser(): Promise<void> {
    if (!this._storage) return;
    const user = await this._storage.get('currentUser');
    this.usuarioActual = user ?? null;
  }

  getUsuario(): Usuario | null {
    return this.usuarioActual;
  }

  crearUsuario(requestBody: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios`, requestBody);
  }

  login(username: string, password: string): Observable<{ message: string; usuario: Usuario }> {
    return this.http.post<{ message: string; usuario: Usuario }>(`${this.apiUrl}/usuarios/login`, {
      username,
      password,
    });
  }
}
