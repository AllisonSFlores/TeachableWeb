import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-insert-student-course',
  templateUrl: './insert-student-course.component.html',
  styleUrls: ['./insert-student-course.component.scss']
})
export class InsertStudentCourseComponent implements OnInit {
  data:any;
  idCourse:any;
  courseInfo:any;
  constructor(private router:Router,private service:AdminService,private route: ActivatedRoute,private _snackBar: MatSnackBar) { 
    this.route.paramMap.subscribe(paramMap =>{
      this.idCourse=paramMap.get('id')
      })
  }
  ngOnInit(): void {
    this.getStudents();
  }
  async getStudents(){
    var users=await this.service.getAllUsers();
    this.data=[];
    var aux=false;
    users.forEach((element:any) => {
      element.courses.forEach((cour:any) => {
        if(cour._id==this.idCourse ){
          aux=true;
        }
      });
      if(!aux && parseInt(element.permissionLevel)==1){
        this.data.push({nombre:element.name,id:element._id,courses:element.courses,valor:false});
      }
      aux=false;
      
    });
    this.courseInfo=await this.service.getCourse(this.idCourse);
  }

verifyHorario(course:any){
  console.log(course);
    var horaIn=String(course.schedule.StartTime);
    var horaFin=String(course.schedule.StartTime);
    var dia1=course.schedule.dayOne;
    var dia2=course.schedule.dayTwo;
    if(dia1==this.courseInfo.schedule.dayOne || dia1==this.courseInfo.schedule.dayTwo || dia2==this.courseInfo.schedule.dayOne || dia2==this.courseInfo.schedule.dayTwo){
      //if((startTimeOne.before(startTimeTwo) && startTimeTwo.before(endTimeOne)) || 
      //(startTimeOne.before(endTimeTwo) && endTimeTwo.before(endTimeOne)) || 
      //(startTimeOne.equals(endTimeTwo) && endTimeTwo.equals(endTimeOne)) ){

      if((horaIn<=this.courseInfo.schedule.StartTime && this.courseInfo.schedule.StartTime<=horaFin)||
      (horaIn<=this.courseInfo.schedule.EndTime && this.courseInfo.schedule.EndTime<=horaFin)||
      (this.courseInfo.schedule.StartTime==horaFin && this.courseInfo.schedule.EndTime==horaFin)
      ){
        return true;
      }else{return false;}
    }else{
      return true;
    }
  }
  getCourse(id:string){
    var course:any;
    var aux=false;
    this.service.getCourseTwo(id).subscribe(
      (res)=>{
        course=res;
        aux=this.verifyHorario(course);
      },
      (err)=>{
        console.log(err)}); 
        return aux;

  }

   choqueHorario (coursesUser:any){
    var aux=true;
    coursesUser.forEach((element:any) => {
      aux=this.getCourse(element._id);
    });
    return aux;
  }

  insertUsers(){
    var json:any;
    this.data.forEach((element:any) => {
      if(element.valor){
        if(this.choqueHorario(element.courses)){
          json={user:{
            _id:element.id,
            name:element.nombre
        },
        course: {
            _id:this.idCourse,
            name:this.courseInfo.name}
          };
          this.agregar(json);
        }else{
          this._snackBar.open('Hubo un choque','',{
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'})}
        
      }
    });
    this.ngOnInit();
  }

 
  agregar(json:any){
    this.service.addParticipantCourse(this.idCourse,json).subscribe(
      (res)=>{
        this._snackBar.open('Valor insertado','',{
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'})
      },
      (err)=>{console.log(err)});
    }
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



