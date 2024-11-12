import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { 
    this.authStatus.next(this.isLoggedIn());
   }

   saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.authStatus.next(true);

    }

    clearToken(): void {
      localStorage.removeItem('token');
      this.authStatus.next(false);
    }

    getToken (): string {
      return localStorage.getItem('token') || '';
    }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
