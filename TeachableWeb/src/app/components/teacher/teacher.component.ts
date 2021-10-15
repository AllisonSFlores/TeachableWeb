import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  a=[{"name":"Noticias","link":"/newsT"},{"name":"Salir","link":"/login"}];
  constructor() { }

  ngOnInit(): void {
  }

}
