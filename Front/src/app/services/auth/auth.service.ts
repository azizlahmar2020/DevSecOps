// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthenticationRequest } from 'src/app/model/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/model/AuthenticationResponse';
import { RegisterRequest } from 'src/app/model/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = 'http://localhost:8089/foyer/api/v1/auth';

  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, registerRequest);
  }

  login(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    const authToken = this.getAuthToken();
    // Log the token
    console.log('Token:', authToken);
    // Check if authToken is not null before adding the Authorization header
    const headers = authToken
      ? new HttpHeaders({ 'Authorization': `No Auth` })
      : new HttpHeaders();
  
      return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, authRequest, { headers: headers })
      .pipe(
        tap((response: AuthenticationResponse) => {
          // Set the token and role in session storage after a successful login
          this.setAuthToken(response.token);
          this.setUserRole(response.role);  // Assuming there's a role property in AuthenticationResponse
        })
      );
  }

  
  private setUserRole(role: string): void {
    localStorage.setItem('userRole', role);
  }
  
  private getAuthToken(): string | null {
    // Retrieve the authentication token from local storage
    return localStorage.getItem('authToken');
  }
  
  
  
  private setAuthToken(token: string): void {
    // Set the authentication token in local storage
    localStorage.setItem('authToken', token);
    console.log('Token set:', token);
  }
  
  
}
