import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8000/api';  // адрес вашего Django API

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, userData);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, credentials);
  }

  getUserData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/`);
  }

  logoutUser(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout/`, {});
  }
}
