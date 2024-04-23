import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tratamiento } from '../models/Tratamiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientosService {
  constructor(private http: HttpClient) { }

  getAllTratamientos(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/all');
  }

  countActivos(): Observable<Number> {
    return this.http.get<Number>('http://localhost:8090/tratamiento/countActivos');
  }

  countRealizados(): Observable<Number> {
    return this.http.get<Number>('http://localhost:8090/tratamiento/countRealizados');
  }

}
