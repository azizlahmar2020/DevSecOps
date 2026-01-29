import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservations } from '../model/Reservations';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private url: string = 'http://localhost:8089/foyer/Reservation';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllReservations(): Observable<any> {
    return this.http.get(this.url + '/allReservation');
  }

  addReservation(reservation: Reservations): Observable<any> {
    return this.http.post(this.url + '/addReservation', reservation, this.httpOptions);
  }

  deleteReservation(reser: Reservations): Observable<Reservations> {
    return this.http.delete<Reservations>(this.url + '/deleteRes/' + reser.idReservation);
  }

  deleteReservationById(reservationId: number): Observable<any> {
    const url = `${this.url}/deleteRes/${reservationId}`;
    return this.http.delete(url);
  }

  getReservationById(id: any): Observable<any> {
    return this.http.get(this.url + '/reservationbyId/' + id);
  }

  updateReservation(id: number, reservation: Reservations): Observable<Reservations> {
    return this.http.put<Reservations>(`${this.url}/updateReservation/${id}`, reservation, this.httpOptions);
  }

  affecterReservationChambre(idReservation: string, idChambre: number): Observable<string> {
    return this.http.put<string>(this.url + '/affecterReservationAChambre/' + idReservation + '/' + idChambre, {});
  }

  desaffacterReservationChambre(idReservation: String): Observable<string> {
    return this.http.put<string>(this.url + '/desaffecterReservationAChambre/' + idReservation, {});
  }
}
