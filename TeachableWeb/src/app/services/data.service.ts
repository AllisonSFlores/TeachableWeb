import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  token="";
  API_URL='https://api-mongodbatlas.herokuapp.com/';
  permissionLevel=0;
  constructor(
    private http:HttpClient,
  ) { }
  getToken():string {
    return this.token;
  }
  setToken(token:string):void {
    this.token=token
  }
  
}
