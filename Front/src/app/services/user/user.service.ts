import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  private url: String = 'http://localhost:8089/foyer/api/v1';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getallUsers(): Observable<any> {
    return this.http.get(this.url + '/allUsers');
  }
  addUser(user: User): Observable<any> {
    return this.http.post(this.url + '/addUser', user);  
  }

  deleteUser(user:User):Observable<User>{
    return this.http.delete<User>(this.url+'/deleteUser/'+user.id );
  }

  getUserById(id: any) {
    return this.http.get(this.url+'/UserById/' + id);
   }

  updateUser(user: User): Observable<User> {
   return this.http.put<User>(this.url+'/updateUser', user);
  }
  
}
