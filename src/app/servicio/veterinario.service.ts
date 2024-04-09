import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../models/Veterinario';

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
}
