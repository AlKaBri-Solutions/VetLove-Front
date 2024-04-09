import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { Mascota } from '../models/Mascota';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(
    private http: HttpClient,
    private servicioCliente: ClienteService
  ) { }

  cliente!:Cliente;

  getAllMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/all');
  }

  getMascotaById(id: number) {
    return this.http.get<Mascota>('http://localhost:8090/mascota/find?id=' + id);
  }

  getMascotasByVeterinarioId(id: number) {
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/veterinario?id=' + id);
  }

  saveMascota(mascota: Mascota) {
    const params = {
      cedula: mascota.dueno.cedula,
      mascota: mascota
    }
    return this.http.post<Mascota>('http://localhost:8090/mascota/add', params);
  }

  updateMascota(mascota: Mascota) {
    return this.http.put<Mascota>('http://localhost:8090/mascota/update', mascota);
  }

  deleteMascota(id: number) {
    return this.http.delete<Mascota>('http://localhost:8090/mascota/delete/' + id);
  }

  
}
