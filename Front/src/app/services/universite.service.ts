import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { universite } from '../model/universite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class universiteService {
  getUniversiteById: any;
  getuniversiteById(idUniversite: number) {
    throw new Error('Method not implemented.');
  }
  private url: String = 'http://localhost:8091/foyer/universite/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http:HttpClient) { }
  getuniversite():Observable<any> {
    return this.http.get(`${this.url}restieve-all-universites`);
  }
  universiteById(univerite:universite) {
    return this.http.get(this.url+"remove-universite/"+univerite.idUniversite);

  }
  addUniversite(universite: universite): Observable<universite> {
    const addUrl = `${this.url}add-universite`;
    return this.http.post<universite>(addUrl, universite, this.httpOptions);
  }
  removeUniversite(universite: universite) {
    return this.http.delete(this.url+"remove-universite/"+universite.idUniversite);
  }

  updateUniversite(univerite: universite, id: number): Observable<universite> {
    const updateUrl = `${this.url}update-universite/${id}`;
    return this.http.put<universite>(updateUrl, univerite, this.httpOptions);
  }

}
