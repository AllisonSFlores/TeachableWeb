import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  a=[{}];
  constructor(
    private rutaActiva: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    const id =this.rutaActiva.snapshot.params.id;
    this.a=[{"name":"Noticias","link":`/teacher/${id}/newsT/${id}`},
    {"name":"Salir","link":"/teacher/login"},
    {"name":"Tareas","link":`/teacher/${id}/assigmentsT/${id}`},
    {"name":"Estudiantes","link":`/teacher/${id}/listStudenT/${id}`},
    {"name":"Chat","link":`/teacher/${id}/chat/${id}`}]
  }

}
