import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL='https://api-mongodbatlas.herokuapp.com/'
  constructor(
    private http:HttpClient
    ) { }
  login(email:String, password:String):Observable<any>{
    return this.http.post(`${this.API_URL}auth`,
    {
      "email":email,
      "password":password
    });
  }
  getType(token:string):Observable<any>{
    return this.http.get(`${this.API_URL}getMyInfo`,{"headers": {"Authorization":`Bearer ${token}`}})
  }
}
