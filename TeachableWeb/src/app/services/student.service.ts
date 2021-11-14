import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL='https://api-mongodbatlas.herokuapp.com/'
  constructor(
    private http:HttpClient,
    private data:DataService
  ) { }
  getAssigments(idCourse:string):Observable<any>{
    return this.http.get(`${this.API_URL}courses/assignment/${idCourse}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  
  
  getCourse(idCourse:string):Observable<any>{
    return this.http.get(`${this.API_URL}courses/${idCourse}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
  
  getNews(idCourse:string):Observable<any>{
    return this.http.get(`${this.API_URL}courses/news/${idCourse}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

 
 
    //angular otro paquete
    //multer
  getChat(idCourse:string):Observable<any>{
    return this.http.get(`${this.API_URL}courses/chat/${idCourse}`,{"headers":{"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  newMessage(idCourse:string,message:string,time:string):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/chat/${idCourse}`,
    {
      "writer":"",
      "message":message,
      "time":time},
      {"headers":{"Authorization":`Bearer ${this.data.getToken()}`}});
  }
  

}
