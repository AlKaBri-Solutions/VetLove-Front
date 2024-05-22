import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserVeterinario } from '../models/UserVeterinario';
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

  getVeterinarioByCedula(cedula: string){
    return this.http.get<Veterinario>('http://localhost:8090/veterinario/findCedula?cedula=' + cedula); 
  }


  countAll(): Observable<Number> {
    return this.http.get<Number>('http://localhost:8090/veterinario/countAll');
  }

  getAllVeterinarios() {
    return this.http.get<Veterinario[]>('http://localhost:8090/veterinario/all');
  }

  saveVeterinario(veterinario: Veterinario) {
    return this.http.post<Veterinario>('http://localhost:8090/veterinario/add', veterinario);
  }

  updateVeterinario(veterinario: Veterinario) {
    return this.http.put<Veterinario>('http://localhost:8090/veterinario/update', veterinario);
  }

  countVeterinariosActivos(): Observable<Number>{
    return this.http.get<Number>('http://localhost:8090/veterinario/countVeterinariosActivos');
  }

  countVeterinariosInactivos(): Observable<Number>{
    return this.http.get<Number>('http://localhost:8090/veterinario/countVeterinariosInctivos');
  }

  login(user: UserVeterinario):Observable<String>{
    return this.http.post('http://localhost:8090/veterinario/login',user,
    {
      responseType: 'text'
    })
  }

  veterinarioHome():Observable<Veterinario>{
    return this.http.get<Veterinario>('http://localhost:8090/veterinario/details')
  }
}
