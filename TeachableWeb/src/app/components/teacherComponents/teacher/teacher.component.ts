import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  a=[{"name":"Noticias","link":"/teacher/newsT"},
    {"name":"Salir","link":"/teacher/login"},
    {"name":"Tareas","link":"/teacher/assigmentsT"},
    {"name":"Estudiantes","link":"/teacher/listStudenT"}];
  constructor() { }

  ngOnInit(): void {
  }

}
