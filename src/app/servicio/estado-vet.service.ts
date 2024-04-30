import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoVet } from '../models/EstadoVet';

@Injectable({
  providedIn: 'root'
})
export class EstadoVetService {

  constructor(
    private http: HttpClient
  ) { }

  
  getAllEstadosVet(): Observable<EstadoVet[]> {
    return this.http.get<EstadoVet[]>("http://localhost:8090/estadoVet/all");
  }
}
