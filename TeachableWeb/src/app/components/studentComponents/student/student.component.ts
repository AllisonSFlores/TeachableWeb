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
    {"name":"Salir","link":"/student/login"},
    {"name":"Tareas","link":`/student/${id}/assigmentsS/${id}`},
   // {"name":"Estudiantes","link":`/student/${id}/listStudenT/${id}`},
    {"name":"Chat","link":`/student/${id}/chat/${id}`}]
  }

}
