import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form :FormGroup;
  constructor(private formBuilder: FormBuilder,private _snackBar: MatSnackBar) { 
    this.form=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  ingresar(){
    const email = this.form.value.email;
    const pass = this.form.value.password;
    this.error();
  }
  error(){
    this._snackBar.open('Todavia no funciona con el backend','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
