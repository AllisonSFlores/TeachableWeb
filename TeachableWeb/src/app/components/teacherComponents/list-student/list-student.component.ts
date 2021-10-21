import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  id =this.rutaActiva.snapshot.params.id;
  lista="";
  list=[{_id:"",name:""}];
  a=[{"name":"Noticias","link":`/teacher/${this.id}/newsT/${this.id}`},
  {"name":"Salir","link":"/login"},
  {"name":"Tareas","link":`/teacher/${this.id}/assigmentsT/${this.id}`},
  {"name":"Estudiantes","link":`/teacher/${this.id}/listStudenT/${this.id}`},
  {"name":"Chat","link":`/teacher/${this.id}/chat/${this.id}`}];
  constructor(
    private rutaActiva: ActivatedRoute,
    private teacherService: TeacherService,
    private _snackBar: MatSnackBar,
  ) {
    this.getStudentsAux();
   }
    ngAfterViewInit(){
      this.getStudentsAux();
    }
  ngOnInit(): void {
   this.getStudentsAux();
    
  }
  imprimirList(){
  }
  getStudentsAux(){
    this.teacherService.getStudents(this.id).subscribe(
      (res)=>{
        console.log(res.Students)
        this.list=res.Students;
        
      },
      (err)=>{console.log(err)});
  }
  
  getStudents(id:string){
    console.log("id"+id)
      this.teacherService.getStudentsAux(id).subscribe(
        (res)=>{
          console.log("Respuesta "+res)
          this.messageEmail(res.email)
        },
        (err)=>{
          console.log(err);
        })
  }
  messageEmail(email:string){
    this._snackBar.open(`El correo del estudiante es ${email}`,'',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'})
  }
  messageCofirm(){
    this._snackBar.open('Lista descargada','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'})
  }

}
