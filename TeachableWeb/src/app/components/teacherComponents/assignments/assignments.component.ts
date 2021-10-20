import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
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
    a=[{"name":"Noticias","link":`/teacher/${this.id}/newsT/${this.id}`},
    {"name":"Salir","link":"/login"},
    {"name":"Tareas","link":`/teacher/${this.id}/assigmentsT/${this.id}`},
    {"name":"Estudiantes","link":`/teacher/${this.id}/listStudenT/${this.id}`}];
  form :FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private teacherService:TeacherService,
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
  newAssigment(){
    const code = this.form.value.code;
    const tittle = this.form.value.tittle;
    const des = this.form.value.description;
    const dl = this.form.value.deadline;
    this.teacherService.newAssigment(this.id,code,tittle,des,dl).subscribe(
      (res)=>{
        this.getAssigments();
        console.log(res);
        this.messageCofirm()
      },
      (err)=>{console.log(err)});
    
  }
  getAssigments(){
    this.teacherService.getAssigments(this.id).subscribe(
      (res)=>{
        console.log(res[0].assignments);
        this.assignments=res[0].assignments;
      },
      (err)=>{console.log(err)});
  }
  messageCofirm(){
    this._snackBar.open('Tarea agregada','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'})
  }
}
