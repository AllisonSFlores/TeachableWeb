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
  getUserInfo(idUser:string):Observable<any>{
    return this.http.get(`${this.API_URL}/${idUser}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${this.API_URL}/getAllUsers`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  getAllCourses():Observable<any>{
    return this.http.get(`${this.API_URL}/courses/allcourses`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  getCourse(idCourse:string):Observable<any>{
    return this.http.get(`${this.API_URL}/courses/${idCourse}`,
    {"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
//rutas patch
  removeStudent(idCourse:string,student:string):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/removeStudent/${idCourse}`,
    {},{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  addParticipantCourse(idCourse:string,student:string):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/newStudent/${idCourse}`,
    {},{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
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

  updateUser(idUser:string,user:string):Observable<any>{
    return this.http.patch(`${this.API_URL}users/${idUser}`,
    {},{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
        /*this.email = email;
        this.name = name;
        this.id_card = id_card;
        this.level = level;*/ 

  updateCourse(idCourse:string,course:string):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/${idCourse}`,
    {},{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  addTeacherCourse(idCourse:string,teacher:string):Observable<any>{
    return this.http.patch(`${this.API_URL}courses/newTeacher/${idCourse}`,
    {},{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }

  //rutas post
  insertUser(user:string):Observable<any>{
    return this.http.post(`${this.API_URL}users`,
    {},{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
  }
  /*
        this.email = email;
        this.password = password;
        this.permissionLevel = permissionLevel;
        this.name = name;
        this.id_card = id_card;
        this.level = level;
   */

  insertCourse(course:string):Observable<any>{
    return this.http.post(`${this.API_URL}courses`,
    {},{"headers": {"Authorization":`Bearer ${this.data.getToken()}`}});
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
