import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL='https://api-mongodbatlas.herokuapp.com/'
  constructor(
    private http:HttpClient,
    private data:DataService
  ) { }

  //rutas get
  getUserInfo(idUser:string){
    return this.http.get(`${this.API_URL}${idUser}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}}).toPromise();
  }

  getAllUsers(){
    return this.http.get<any[]>(`${this.API_URL}getAllUsers`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}}).toPromise();
  }

  getAllCourses(){
    return this.http.get(`${this.API_URL}courses/allcourses`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}}).toPromise();
  }

  getCourse(idCourse:string){
    return this.http.get(`${this.API_URL}courses/${idCourse}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}}).toPromise();
  }

  getCourseTwo(idCourse:string):Observable<any>{
    return this.http.get(`${this.API_URL}courses/${idCourse}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
//rutas patch
  removeStudent(idCourse:string,student:any):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/removeStudent/${idCourse}`,
    student,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  addParticipantCourse(idCourse:string,student:any):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/newStudent/${idCourse}`,
    student,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
  /*
        * {
        "user":{
            "_id":"6131a2c8a54e1b3c254776e1",
            "name":"Allison"
        },
        "course": {
            "_id":"612fff670dd9995aa14b641b",
            "name":"Estructuras"
        }
    }*/

  updateUser(idUser:string,user:any):Observable<any>{
    return this.http.patch(`${this.API_URL}users/${idUser}`,
    user,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
        

  updateCourse(idCourse:string,course:any):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/${idCourse}`,
    course,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  addTeacherCourse(idCourse:string,teacher:any):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/newTeacher/${idCourse}`,
    teacher,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  //rutas post
  insertUser(user:any):Observable<any>{
    return this.http.post(`${this.API_URL}users`,
    user,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  insertCourse(course:any):Observable<any>{
    return this.http.post(`${this.API_URL}courses`,
    course,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
  /*{
        "name":"FOC",
            "grade":"6",
            "schedule":{"StartTime":"7:30",
            "EndTime":"9:20",
            "dayOne":"M",
            "dayTwo":"J"},
        "teacher":{"_id":"613003584420f0e4db06bb88","name":"Benavides"}
    }*/

  //rutas delete
  deleteUser(idUser:string):Observable<any>{
    return this.http.delete(`${this.API_URL}users/${idUser}`,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  deleteCourse(idCourse:string):Observable<any>{
    return this.http.delete(`${this.API_URL}courses/${idCourse}`,{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

}
