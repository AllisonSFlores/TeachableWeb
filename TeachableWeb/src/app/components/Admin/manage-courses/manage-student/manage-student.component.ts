import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {
  data=[{nombre:"Juan",id:1,valor:false},{nombre:"Allison",id:1,valor:false},{nombre:"Alex",id:1,valor:false}]
  idCourse=1
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 

  eliminar(){
    
  }
}
