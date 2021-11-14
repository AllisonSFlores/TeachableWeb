import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  a=[{}];
  constructor(
    private rutaActiva: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    const id =this.rutaActiva.snapshot.params.id;
    this.a=[{"name":"Noticias","link":`/student/${id}/newsS/${id}`},
    {"name":"Salir","link":"/"},
    {"name":"Tareas","link":`/student/${id}/assigmentsS/${id}`},
    {"name":"Profesor","link":`/student/${id}/teacherCourse/${id}`},
    // {"name":"Estudiantes","link":`/student/${this.id}/listStudenS/${this.id}`},
    {"name":"Chat","link":`/student/${id}/chatS/${id}`}];
  }

}
