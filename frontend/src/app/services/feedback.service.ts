import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { feedback } from '../model/feedback'; // Make sure to import the Feedback model

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private url = 'http://localhost:8091/foyer';

  constructor(private http: HttpClient) { }

  ajouterFeedback(feedback: feedback): Observable<feedback> {
    return this.http.post<feedback>(`${this.url}/ajouter`, feedback);
  }

  getStatistics(): Observable<any> {
    return this.http.get<any>(`${this.url}/statistics`);
  }
}
