import { Bloc } from 'src/app/model/Bloc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from '../model/Chambre';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  public blocs: Bloc[] = [];

  private url: String = 'http://localhost:8089/foyer/Bloc';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http:HttpClient) { }

  addBloc(Bloc:any){
    return this.http.post(this.url+'/addBloc',Bloc, this.httpOptions);
  }

  getAllBloc() {
    return this.http.get(this.url+'/allBloc');}

  deleteBloc(bloc:Bloc){
    return this.http.delete(this.url+'/deleteBloc/'+bloc.idBloc);
  }
  getBlocById(Id:any) {
    return this.http.get(this.url+'/bloc/'+Id);
  }

 UpdateBloc(bloc: Bloc) {
  return this.http.put(this.url + '/updateBloc' , bloc, this.httpOptions);
}

  getBloc( bloc :Bloc) {
    return this.http.get(this.url+'/bloc/'+bloc.idBloc)
  }

  rechercheAvanceeBloc(nom:string){
    return this.http.get(this.url+'/recherche/'+nom)
  }

  affecterFoyerABloc(idFoyer: number, idBloc: number): Observable<void> {
    const url = `${this.url}/affecterFoyerABloc/${idFoyer}/${idBloc}`;
    return this.http.put<void>(url, {});
  }






  desaffecterChambreABloc(idChambre: number): Observable<void> {
    return this.http.put<void>(this.url + '/desaffecterChambreABloc/' + idChambre, {});
  }


  estBlocComplet(idBloc: number): Observable<boolean> {
    const url = `${this.url}/BlocDispo/${idBloc}`;
    return this.http.get<boolean>(url);
  }

  getPercentageByBloc(idBloc: number): Observable<any> {
    const url = `${this.url}/percentage/${idBloc}`;
    return this.http.get<any>(url);
  }


  getCountReservationChambre(idBloc: number): Observable<number> {
    const url = `${this.url}/countreservationchambre/${idBloc}`;
    return this.http.get<number>(url);
  }




}
