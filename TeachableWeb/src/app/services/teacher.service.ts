import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  API_URL='https://api-mongodbatlas.herokuapp.com/'
  constructor(
    private http:HttpClient,
    private data:DataService
  ) { }
  getAssigments(idCourse:string):Observable<any>{
    return this.http.get(`${this.API_URL}courses/assignment/${idCourse}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  newAssigment(idCourse:string,code:string,title:string,des:string,dl:string):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/newAssignment/${idCourse}`,
    {"code":code,
    "title":title,
    "description":des,
    "deadline":dl},
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

}
