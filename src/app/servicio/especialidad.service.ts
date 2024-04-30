import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidad } from '../models/Especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>("http://localhost:8090/especialidad/all");
  }
}
