import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form :FormGroup;
  a:Object;
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router:Router,
    private loginService:LoginService,
    private dataService:DataService
    ) { 
    this.form=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
    this.a=""
  }

  ngOnInit(): void {
  }

   ingresar(){
    const email = this.form.value.email;
    const pass = this.form.value.password;
    this.loginService.login(email,pass).subscribe(
      (res)=>{this.getType(res.accessToken)},
      (err)=>{this.error()})
   
  }

  error(){
    this._snackBar.open('Datos incorrectos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'})
  }

  getType(token:string){
    this.dataService.setToken(token);
    this.loginService.getMyInfo().subscribe(
      (res)=>{
        switch(res.permissionLevel){
          case 2048:
            console.log("Administrador");
            this.router.navigate(['admin']);
            break;
          case 7:
            console.log("Es un profesor");
            this.router.navigate(['listCourses']);
            break;
          default:
            console.log("Estudiante");
            this.router.navigate(['listCourses']);
        }
      },
      (err)=>console.log(err))
  }
}