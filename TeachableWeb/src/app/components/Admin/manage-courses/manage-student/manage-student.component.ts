import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {
  //data=[{nombre:"Juan",id:1,valor:false},{nombre:"Allison",id:1,valor:false},{nombre:"Alex",id:1,valor:false}]
  data:any;
  idCourse:any;
  constructor(private router:Router,private service:AdminService,private route: ActivatedRoute,) { 
    this.route.paramMap.subscribe(paramMap =>{
      this.idCourse=paramMap.get('id')
      console.log(this.idCourse)
      })
  }

  ngOnInit(): void {
    this.getStudents();
  }
  async getStudents(){
    this.data=await this.service.getAllUsers();
    console.log(this.data);
  }
 

  eliminar(){
    
  }
}
