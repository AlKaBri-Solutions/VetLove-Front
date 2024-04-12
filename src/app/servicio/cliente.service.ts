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

  getClienteById(id:number): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8090/cliente/find?id=' + id);
  }

  getClienteByCedula(cedula: string): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8090/cliente/findCedula?cedula=' + cedula);
  }

  saveCliente(cliente: Cliente, id: string) {
    const params = {
      id: id,
      cliente: cliente
    }
    console.log(params)
    return this.http.post<Cliente>('http://localhost:8090/cliente/add', params);
  }

  updateCliente(cliente: Cliente) {
    return this.http.put<Cliente>('http://localhost:8090/cliente/update', cliente);
  }
}
