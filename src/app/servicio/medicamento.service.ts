
import { Injectable } from '@angular/core';
import { Medicamento } from '../models/Medicamento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor(private http: HttpClient) { }

  getAllMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>('http://localhost:8090/medicamento/all');
  }
}
