import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-teacherCourse',
  templateUrl: './teacherCourse.component.html',
  styleUrls: ['./teacherCourse.component.scss']
})
export class TeacherCourseComponent implements OnInit {
  
  form :FormGroup;
  p ="";
  d= "";
  e ="";
  scor = 1;
  level="";
  id =this.rutaActiva.snapshot.params.id;
  a=[{"name":"Noticias","link":`/student/${this.id}/newsS/${this.id}`},
  {"name":"Salir","link":"/"},
  {"name":"Profesor","link":`/student/${this.id}/teacherCourse/${this.id}`},
    {"name":"Tareas","link":`/student/${this.id}/assigmentsS/${this.id}`},
  {"name":"Chat","link":`/student/${this.id}/chatS/${this.id}`}];
  news=[{"title":"Bienvenida",
  "description":"Nos vemos..."}
  ];
  
  
  
  constructor(
    private formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private studentService: StudentService,
    private _snackBar: MatSnackBar,
  ) {
    this.ngOnInit();
    this.form=this.formBuilder.group({
      tittle:['',Validators.required],
      description:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.getTeacher();
    const id =this.rutaActiva.snapshot.params.id;
    
  }
  
  getTeacher(){
    this.studentService.getCourse(this.id).subscribe(
      
      (res)=>{
        this.studentService.getTeach(res.teacher._id).subscribe(
      
          (res)=>{
            this.p = res.name;
            this.d = "email: "+res.email ;
            this.e = "Calificación general: "+res.level+"/5";
            this.level = res.level;
          },
          (err)=>{console.log(err)});
      },
      (err)=>{console.log(err)});
      
    }
    score(s: string){
      if (parseInt(s) > parseFloat(this.level) && parseFloat(this.level) < 6){
        this.scor = parseFloat(this.level)+0.5;
        this.level = ""+(parseFloat(this.level)+0.5);
        this.e = "Calificación general: "+this.scor+"/5"; 
    }
    else if(parseInt(s) < parseFloat(this.level)){
      this.scor = parseFloat(this.level)-0.5;
      this.level = ""+ (parseFloat(this.level)-0.5);
      this.e = "Calificación general: "+this.scor+"/5"; }
    }
      
    
    
}
