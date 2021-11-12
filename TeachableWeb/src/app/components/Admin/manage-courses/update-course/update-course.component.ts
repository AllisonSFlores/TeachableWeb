import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  form :FormGroup;
  actualProfe="Juanito";
  horario="Dia 1: l   Dia 2:M 7:00 am a 8:30 am";
  constructor(private formBuilder: FormBuilder, private router:Router) { 
    this.form=this.formBuilder.group({
      nombre:[''],
      grado:[''],
      profesor:[''],
      horaIn:[''],
      horaFin:[''],
      dia1:[''],
      dia2:[''],
    });}

  ngOnInit(): void {
  }

  update(){
    console.log(this.form.value.nombre);

  }

  goStudents(){
    this.router.navigateByUrl('/admin/manageStudent');

  }

}
