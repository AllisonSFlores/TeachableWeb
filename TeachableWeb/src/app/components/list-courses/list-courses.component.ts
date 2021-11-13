import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { EmailService } from 'src/app/services/email.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {
  
  id =this.rutaActiva.snapshot.params.id;
  list=[{_id:"",name:""}]
  
  typeUser=""
  constructor(
    private loginService:LoginService,
    private _snackBar: MatSnackBar,
    private router:Router,
    private rutaActiva: ActivatedRoute,
    private StudentService: StudentService,
    private emailService:EmailService
    ) { 
      this.ngOnInit();
      }

  ngOnInit(): void {
    this.setList();
    
  }

  setList(): void{
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
        console.log("Estudiante");
        this.router.navigate([`student/${idCourse}`]);
        break;
      } 
  }

}
