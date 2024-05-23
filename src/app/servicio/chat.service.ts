import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  

  chatResponse(query_text:string): Observable<Chat> {
    return this.http.post<Chat>('http://localhost:8000/query/', query_text);
  }
}
