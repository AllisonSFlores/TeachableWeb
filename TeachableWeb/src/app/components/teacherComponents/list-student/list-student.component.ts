import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  list=[{"id_card":2513,
        "name":"Allison",
        "email":"allissolano@gmail"},{"id_card":2513,
        "name":"Allison",
        "email":"allissolano@gmail"}];
        a=[{"name":"Noticias","link":"/teacher/newsT"},
        {"name":"Salir","link":"/teacher/login"},
        {"name":"Tareas","link":"/teacher/assigmentsT"},
        {"name":"Estudiantes","link":"/teacher/listStudenT"}];
  constructor() { }

  ngOnInit(): void {
  }
  imprimirList(){


  }

}
