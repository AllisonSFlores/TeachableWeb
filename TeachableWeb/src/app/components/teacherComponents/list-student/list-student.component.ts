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
  lista=[]
  list=[{"_id":"613f00fd02ff914f8e30b1b5","name":"Carlos","email":""}];
  a=[{"name":"Noticias","link":`/teacher/${this.id}/newsT/${this.id}`},
  {"name":"Salir","link":"/teacher/login"},
  {"name":"Tareas","link":`/teacher/${this.id}/assigmentsT/${this.id}`},
  {"name":"Estudiantes","link":`/teacher/${this.id}/listStudenT/${this.id}`}];
  constructor(
    private rutaActiva: ActivatedRoute,
    private teacherService: TeacherService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getStudentsAux();
    
  }
  imprimirList(){
  }
  getStudentsAux(){
    this.teacherService.getStudents(this.id).subscribe(
      (res)=>{
        this.list=res.Students;
      },
      (err)=>{console.log(err)});
  }
  
  getStudents(){
      const id=this.list[0]._id;
      this.teacherService.getStudentsAux("613f00fd02ff914f8e30b1b5").subscribe(
        (res)=>{
          this.messageCofirm()
        },
        (err)=>{
          console.log(err);
        })
  }
  messageCofirm(){
    this._snackBar.open('Lista descargada','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'})
  }

}
