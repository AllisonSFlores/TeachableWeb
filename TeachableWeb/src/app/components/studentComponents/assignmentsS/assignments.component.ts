import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  assignments=[{"title":"Bienvenida",
    "description":"Bienvenidos al curso de estructuras, espero les guste mucho. Nos vemos...",
    "deadline":"12"},
    {"title":"Info de primer clase",
    "description":"Deben enviarme un correo para agregarlos a las lista de google",
    "deadline":"12"}
    ];
    id =this.rutaActiva.snapshot.params.id;
    a=[{"name":"Noticias","link":`/student/${this.id}/newsS/${this.id}`},
    {"name":"Salir","link":"/"},
    {"name":"Tareas","link":`/student/${this.id}/assigmentsS/${this.id}`},
    {"name":"Profesor","link":`/student/${this.id}/teacherCourse/${this.id}`},
    {"name":"Chat","link":`/student/${this.id}/chatS/${this.id}`}];
  form :FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private studentService:StudentService,
    private _snackBar: MatSnackBar,
    ) {
    this.form=this.formBuilder.group({
      code:['',Validators.required],
      tittle:['',Validators.required],
      description:['',Validators.required],
      deadline:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.getAssigments();
    
  }
  
  getAssigments(){
    this.studentService.getAssigments(this.id).subscribe(
      (res)=>{
        console.log(res[0].assignments);
        this.assignments=res[0].assignments;
      },
      (err)=>{console.log(err)});
  }
  
}
