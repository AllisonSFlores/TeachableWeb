import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.scss']
})
export class InsertCourseComponent implements OnInit {
  form :FormGroup;
  teachers:any=[];
  constructor(private formBuilder: FormBuilder,private service:AdminService) { 

    this.form=this.formBuilder.group({
      nombre:[''],
      grado:[''],
      profesor:[''],
      horaIn:[''],
      horaFin:[''],
      dia1:[''],
      dia2:[''],
    });

  
  }
  ngOnInit(): void {
    this.getTeachers();
  }
  async getTeachers(){
    var users:any=await this.service.getAllUsers();
    users.forEach((element:any) => {
      if(element.permissionLevel==7){
        this.teachers.push(element);
      }
    });
  }
/*{
        "name":"FOC",
            "grade":"6",
            "schedule":{"StartTime":"7:30",
            "EndTime":"9:20",
            "dayOne":"M",
            "dayTwo":"J"},
        "teacher":{"_id":"613003584420f0e4db06bb88","name":"Benavides"}
    }*/
  insert(){
    var teacher:any;
    this.teachers.forEach((element:any) => {
      console.log(element);
      console.log(this.form.value.profesor);
      if(element.name==String(this.form.value.profesor)){
        teacher=element;
        console.log(teacher);
      }
    });
    var json={name:this.form.value.nombre,
    grade:this.form.value.grado,
    schedule:{StartTime:this.form.value.horaIn,
    EndTime:this.form.value.horaFin,
    dayOne:this.form.value.dia1,
    dayTwo:this.form.value.dia2},
    teacher:{_id:teacher._id,name:teacher.name}}
    this.service.insertCourse(json).subscribe(
      (res)=>{
        console.log("Insertado");
      },
      (err)=>{console.log(err)});
  }

}
