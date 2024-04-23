import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../models/Veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(
    private http: HttpClient
  ) { }

  getVeterinarioById(id: number) {
    return this.http.get<Veterinario>('http://localhost:8090/veterinario/find?id=' + id);
  }

  getVeterinarioByCedula(cedula: string){
    return this.http.get<Veterinario>('http://localhost:8090/veterinario/findCedula?cedula=' + cedula); 
  }


  countAll(): Observable<Number> {
    return this.http.get<Number>('http://localhost:8090/veterinario/countAll');

  getAllVeterinarios() {
    return this.http.get<Veterinario[]>('http://localhost:8090/veterinario/all');
  }

  saveVeterinario(veterinario: Veterinario) {
    return this.http.post<Veterinario>('http://localhost:8090/veterinario/add', veterinario);
  }

  updateVeterinario(veterinario: Veterinario) {
    return this.http.put<Veterinario>('http://localhost:8090/veterinario/update', veterinario);

  }
}
