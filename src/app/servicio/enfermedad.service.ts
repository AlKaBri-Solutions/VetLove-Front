import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfermedad } from '../models/Enfermedad';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEnfermedades(): Observable<Enfermedad[]> {
    return this.http.get<Enfermedad[]>("http://localhost:8090/enfermedad/all");
  }
}
