import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from '../models/Mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(
    private http: HttpClient
  ) { }

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
    console.log("Entra al servicio")
    return this.http.post<Mascota>('http://localhost:8090/mascota/add', mascota);
  }

  deleteMascota(id: number) {
    return this.http.delete<Mascota>('http://localhost:8090/mascota/delete/' + id);
  }

  
}
