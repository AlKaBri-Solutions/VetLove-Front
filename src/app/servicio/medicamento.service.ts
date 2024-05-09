
import { Injectable } from '@angular/core';
import { Medicamento } from '../models/Medicamento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TratamientoXMedicamento } from '../models/TratamientoXMedicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor(private http: HttpClient) { }

  getAllMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>('http://localhost:8090/medicamento/all');
  }

  getVentasTotales():Observable<Number>{
    return this.http.get<Number>('http://localhost:8090/medicamento/getVentasTotales')
  }

  getGananciasTotales():Observable<Number>{
    return this.http.get<Number>('http://localhost:8090/medicamento/getGananciasTotales')
  }

  getTopVendidos():Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>('http://localhost:8090/medicamento/getTopVendidos')
  }

  countMedicamentoXEnfermedadLastMonth(): Observable<TratamientoXMedicamento[]>{
    return this.http.get<TratamientoXMedicamento[]>('http://localhost:8090/medicamento/countMedicamentoXEnfermedadLastMonth')
  }
  

}
