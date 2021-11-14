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
  actualProfe="Juanito";
  horario="Dia 1: l   Dia 2:M 7:00 am a 8:30 am";
  data:any;
  id:any;
  constructor(private formBuilder: FormBuilder, private router:Router,private service:AdminService,private route: ActivatedRoute) { 
    this.form=this.formBuilder.group({
      nombre:[''],
      grado:[''],
      profesor:[''],
      horaIn:[''],
      horaFin:[''],
      dia1:[''],
      dia2:[''],
    });
    this.route.paramMap.subscribe(paramMap =>{
      this.id=paramMap.get('id')
      console.log(this.id)
      })
  }

  ngOnInit(): void {
  }
  
  async getCourse(){
    this.data=await this.service.getCourse(String(this.id));
    console.log(this.data);
  }

  update(){
    console.log(this.form.value.nombre);

  }



}
