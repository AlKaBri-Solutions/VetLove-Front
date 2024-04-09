import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  getClientesByVeterinarioId(id:number): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8090/cliente/veterinario?id=' + id);
  }
}
