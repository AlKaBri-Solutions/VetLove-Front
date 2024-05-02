import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from '../models/Tratamiento';
import { TratamientoRequest } from '../models/TratamientoRequest';

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

  getTratamientosByMascotaId(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/findMascota?id=' + id);
  }

  getTratamientosByVeterinarioId(id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/findVeterinario?id=' + id);
  }

  aplicarMedicamento(tratamiento: Tratamiento) {
    return this.http.post<number>('http://localhost:8090/medicamento/aplicarMedicamento', tratamiento)
  }

  cambiarMedicamento(tratamiento: Tratamiento){
    return this.http.post<number>('http://localhost:8090/medicamento/cambiarMedicamento', tratamiento)
  }

  saveTratamiento(tratamiento: TratamientoRequest) {
    return this.http.post<number>('http://localhost:8090/tratamiento/add', tratamiento)
  }

}
