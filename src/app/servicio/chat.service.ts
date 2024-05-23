import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  

  chatResponse(queryText: string): Observable<Chat> {
    const requestBody = { query_text: queryText }; // Envía un objeto JSON con la propiedad 'query_text'
    return this.http.post<Chat>('http://localhost:8000/query', requestBody);
  }
}
