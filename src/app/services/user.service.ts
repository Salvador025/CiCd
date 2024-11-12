import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(environment.apiUrl);
    
    }
  
  getUser(id: number): Observable<User>{
    return this.httpClient.get<User>(environment.apiUrl + '/' + id);
  }
}
