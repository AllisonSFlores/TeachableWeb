import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-student-course',
  templateUrl: './insert-student-course.component.html',
  styleUrls: ['./insert-student-course.component.scss']
})
export class InsertStudentCourseComponent implements OnInit {
  data=[{nombre:"Juan",id:1,valor:false},{nombre:"Allison",id:1,valor:false},{nombre:"Alex",id:1,valor:false}]
  idCourse=1
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){}

}
