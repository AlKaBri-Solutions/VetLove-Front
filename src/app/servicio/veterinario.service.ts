import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(
    private http: HttpClient
  ) { }

  getVeterinarioById(id: number) {
    return this.http.get('http://localhost:8090/veterinario/find?id=' + id);
  }
}
