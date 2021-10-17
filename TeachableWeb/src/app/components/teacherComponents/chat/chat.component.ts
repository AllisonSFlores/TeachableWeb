import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  a=[{"name":"Noticias","link":"/teacher/newsT"},
  {"name":"Salir","link":"/login"},
  {"name":"Tareas","link":"/teacher/assigmentsT"},
  {"name":"Estudiantes","link":"/teacher/listStudenT"}];
  constructor() { }

  ngOnInit(): void {
  }

}
