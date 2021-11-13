import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.scss']
})
export class InsertUserComponent implements OnInit {
  form :FormGroup;
  constructor(private formBuilder: FormBuilder) { 

    this.form=this.formBuilder.group({
      nombre:[''],
      email:[''],
      tipo:[''],
      password:[''],
      nivel:[''],
      id_card:[''],
    });
  }

  ngOnInit(): void {
  }
  insert(){}
}
