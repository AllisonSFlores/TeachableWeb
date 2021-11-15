import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {
  //data=[{nombre:"Juan",id:1,valor:false},{nombre:"Allison",id:1,valor:false},{nombre:"Alex",id:1,valor:false}]
  data:any;
  idCourse:any;
  constructor(private router:Router,private service:AdminService,private route: ActivatedRoute,private _snackBar: MatSnackBar) { 
    this.route.paramMap.subscribe(paramMap =>{
      this.idCourse=paramMap.get('id')
      })
  }

  ngOnInit(): void {
    this.getStudents();
  }
  async getStudents(){
    var users=await this.service.getAllUsers();
    this.data=[];
    users.forEach((element:any) => {
      element.courses.forEach((cour:any) => {
        if(cour._id==this.idCourse && parseInt(element.permissionLevel)==1){
          this.data.push({nombre:element.name,id:element._id,valor:false});
        }
      });
      
    });
    
  }
 
  eliminarUsuarios(){
    this.data.forEach((element:any) => {
      if(element.valor){
        this.eliminar(element.id);
      }
    });
    this.ngOnInit();
    //this.router.navigate(['/admin/manageCourses']);
  }

  eliminar(id:String){
    var json={idStudent:id}
    
    this.service.removeStudent(this.idCourse,json).subscribe(
      (res)=>{
        this._snackBar.open('Varlo removido','',{
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'})
      },
      (err)=>{console.log(err)});
  }
}
