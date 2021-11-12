import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.scss']
})
export class InsertCourseComponent implements OnInit {
  form :FormGroup;
  constructor(private formBuilder: FormBuilder) { 

    this.form=this.formBuilder.group({
      nombre:[''],
      grado:[''],
      profesor:[''],
      horaIn:[''],
      horaFin:[''],
      dia1:[''],
      dia2:[''],
    });
  }
  ngOnInit(): void {
  }

  insert(){
    console.log("fd");
  }

}
