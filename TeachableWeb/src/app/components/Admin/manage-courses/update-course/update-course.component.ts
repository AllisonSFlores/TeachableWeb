import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  form :FormGroup;
  data:any=[];
  id:any;
  teachers:any=[];
  constructor(private formBuilder: FormBuilder, private router:Router,private service:AdminService,private route: ActivatedRoute) { 
    this.form=this.formBuilder.group({
      nombre:[],
      grado:[],
      profesor:[],
      horaIn:[],
      horaFin:[],
      dia1:[],
      dia2:[],
    });
    this.route.paramMap.subscribe(paramMap =>{
      this.id=paramMap.get('id')
      console.log(this.id)
      })
  }

  ngOnInit(): void {
    this.getTeachers();
    this.getCourse();
     

  }
  async getTeachers(){
    var users:any=await this.service.getAllUsers();
    users.forEach((element:any) => {
      if(element.permissionLevel==7){
        this.teachers.push(element);
      }
    });
  }
  async getCourse(){
    this.data=await this.service.getCourse(String(this.id));
    console.log(this.data);
    this.form=this.formBuilder.group({
      nombre:[String(this.data.name)],
      grado:[String(this.data.grade)],
      profesor:[String(this.data.teacher.name)],
      horaIn:[String(this.data.schedule.StartTime)],
      horaFin:[String(this.data.schedule.EndTime)],
      dia1:[String(this.data.schedule.dayOne)],
      dia2:[String(this.data.schedule.dayTwo)],
    });
  }

  update(){
    var teacher:any;
    this.teachers.forEach((element:any) => {
      if(element.name==String(this.form.value.profesor)){
        teacher=element;
      }
    });
    var json={name:this.form.value.nombre,
    grade:this.form.value.grado,
    schedule:{StartTime:this.form.value.horaIn,
    EndTime:this.form.value.horaFin,
    dayOne:this.form.value.dia1,
    dayTwo:this.form.value.dia2},
    teacher:{_id:teacher._id,name:teacher.name}}
    this.service.updateCourse(this.id,json).subscribe(
      (res)=>{
        console.log("Actualizado");
      },
      (err)=>{console.log(err)});
  }

  delete(){
    this.service.deleteCourse(this.id).subscribe(
      (res)=>{
        console.log("Eliminado");
        this.router.navigate(['/admin/manageCourses']);
      },
      (err)=>{console.log(err)});
  }
  



}
