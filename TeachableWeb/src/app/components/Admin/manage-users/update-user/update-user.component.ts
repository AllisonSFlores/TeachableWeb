import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
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

    this.form.value.nombre="Hola"
  }
  ngOnInit(): void {
  }
  update(){}
}
