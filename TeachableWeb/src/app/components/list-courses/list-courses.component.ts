import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {
  list=[{}]
  typeUser=""
  constructor(
    private loginService:LoginService,
    private _snackBar: MatSnackBar,
    private router:Router
    ) {
    
   }

  ngOnInit(): void {
    this.typeUser="7";
    this.navigateTo("612fff670dd9995aa14b641b");
  }
  setList(){
    this.loginService.getMyInfo().subscribe(
      (res)=>{
        this.list = res.courses;
        this.typeUser = res.permissionLevel;
      },
      (err)=>{this.error()})
  }
  error(){
    this._snackBar.open('Problemas al cargar los datos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'})
  }
  navigateTo(idCourse:string){
    switch(Number(this.typeUser)){
      case 7:
        console.log("Es un profesor");
        this.router.navigate([`teacher/${idCourse}`]);
        break;
      default:
        console.log("Estudiante")
    }
  }


}
