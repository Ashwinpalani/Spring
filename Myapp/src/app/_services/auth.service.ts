import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }

  canAccess() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  canAuthenticate() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  register(name: string, email: string, password: string) {
    return this.http.post<{ idToken: string }>(""/**api url must be given here */, { name, email, password });
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  login(email: string, password: string) {
    return this.http.post<{ idToken: string }>(""/**api url must be given here */, { email, password });
  }
}
