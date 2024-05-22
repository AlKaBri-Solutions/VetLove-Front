import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(
    private http: HttpClient
  ) { }

  getDisponiblesByDia(dia: string): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`http://localhost:8090/reserva/disponiblesXDia/${dia}`);
  }

  reservar(fecha: string, horario: string): Observable<number> {
    let params = {
      fecha: fecha,
      horario: horario
    }
    return this.http.post<number>('http://localhost:8090/reserva/reservar', params);
  }
}
