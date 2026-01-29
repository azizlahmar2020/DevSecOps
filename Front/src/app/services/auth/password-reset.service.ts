import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordResetService {
  private baseUrl = 'http://localhost:8089/foyer/api/v1/auth';  // This should be the endpoint of your Spring backend

  constructor(private http: HttpClient) {}

  requestPasswordReset(email: string): Observable<string> {
    const resetRequest = { email };
    return this.http.post<string>(`${this.baseUrl}/password-reset-request`, resetRequest, { responseType: 'text' as 'json' });
  }

  resetPassword(token: string, newPassword: string): Observable<string> {
    const resetRequest = { token, newPassword };
    const headers = { 'Content-Type': 'application/json' };
  
    console.log('Request:', resetRequest);
    return this.http.post<string>(`${this.baseUrl}/reset-password`, resetRequest, { headers, responseType: 'text' as 'json' })
      .pipe(tap(response => console.log('Response:', response)));
  }
}
