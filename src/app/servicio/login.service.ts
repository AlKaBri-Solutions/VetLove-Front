import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  validateLoginVeterinario(cedula: string, password: string) {
    const json: JSON = <JSON><unknown>{
      "cedula": cedula,
      "password": password
    }
    return this.http.post<number>("http://localhost:8090/login/vetAuth", json);
  }
}
