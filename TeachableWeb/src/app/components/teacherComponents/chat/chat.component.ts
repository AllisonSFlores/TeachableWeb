import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  a=[{}];
  constructor(
    private rutaActiva: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id =this.rutaActiva.snapshot.params.id;
    this.a=[{"name":"Noticias","link":`/teacher/${id}/newsT/${id}`},
    {"name":"Salir","link":"/teacher/login"},
    {"name":"Tareas","link":`/teacher/${id}/assigmentsT/${id}`},
    {"name":"Estudiantes","link":`/teacher/${id}/listStudenT/${id}`}]
  }

}
