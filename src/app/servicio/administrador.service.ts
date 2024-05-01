import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../models/Adminsitrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(
    private http: HttpClient
  ) { }

  getAdministrador(): Observable<Administrador> {
    return this.http.get<Administrador>('http://localhost:8090/admin/findAdmin');
  }

  updateAdministrador(administrador: Administrador) {
    return this.http.put('http://localhost:8090/admin/update', administrador);
  }
}
