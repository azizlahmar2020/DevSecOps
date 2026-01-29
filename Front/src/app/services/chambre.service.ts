import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from '../model/Chambre';
import { Observable, map } from 'rxjs';
import { Bloc } from '../model/Bloc';


@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private url: string = 'http://localhost:8089/foyer/Chambre';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllChambre(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(this.url + '/allChambre');
  }




  addChambre(chambre: Chambre): Observable<any> {
    return this.http.post(this.url + '/addChambre', chambre, this.httpOptions);
  }

  deleteChambre(ch: Chambre): Observable<Chambre> {
    return this.http.delete<Chambre>(this.url + '/deleteChambre/' + ch.idChambre, this.httpOptions);
  }

  getChambreById(id: any): Observable<Chambre> {
    return this.http.get<Chambre>(this.url + '/chambre/' + id);
  }

  updateChambre(id: number, chambre: Chambre): Observable<Chambre> {

    return this.http.put<Chambre>(this.url + '/updateChambre/' + id, chambre, this.httpOptions);

  }

  /*affecterChambreABloc(idChambre: number, idBloc: number): Observable<string> {
    return this.http.put<string>(this.url + '/affecterChambreABloc/' + idChambre + '/' + idBloc, null);
  }*/

  affecterChambreABloc(idChambre: number, idBloc: number): Observable<void> {
    return this.http.put<void>(this.url + '/affecterChambreABloc/' + idChambre + '/' + idBloc, {});
  }




  desaffecterChambreABloc(idChambre: number): Observable<void> {
    return this.http.put<void>(this.url + '/desaffecterChambreABloc/' + idChambre, {});
  }

  getBlocByName(name: string): Observable<any> {
    return this.http.get(this.url + '/bloc/' + name);
  }



  generateQRCode(idChambre: number): Observable<HttpResponse<Blob>> {
    const url = `${this.url}/qr/${idChambre}`;
    return this.http.get(url, {
      observe: 'response',
      responseType: 'blob',
    });
  }
  getBlocById(id: any): Observable<Bloc> {
    return this.http.get<Bloc>(this.url + '/chambreBloc/' + id);
  }
  chambrebybloc(idBloc: string): Observable<Chambre[]> {
    const url = `${this.url}/by-bloc/${idBloc}`;
    return this.http.get<Chambre[]>(url);

  }
}
