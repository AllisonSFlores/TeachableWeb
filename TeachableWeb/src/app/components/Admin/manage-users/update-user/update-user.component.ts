import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  form :FormGroup;
  id:any;
  data:any;
  constructor(private formBuilder: FormBuilder,private router:Router,private service:AdminService,private route: ActivatedRoute) { 

    this.form=this.formBuilder.group({
      nombre:[''],
      email:[''],
      nivel:[''],
      id_card:['']

    });
    this.route.paramMap.subscribe(paramMap =>{
      this.id=paramMap.get('id')
      console.log(this.id)
      })

  }
  ngOnInit(): void {
    this.getUser();
  }
  async getUser(){
    this.data=await this.service.getUserInfo(String(this.id));
    console.log(this.data);
    var nivel=this.data.level;
    var idcard=this.data.id_card;
    if(nivel==undefined){
      nivel='';
    }
    if(idcard==undefined){idcard=''}
    this.form=this.formBuilder.group({
      nombre:[String(this.data.name)],
      email:[String(this.data.email)],
      nivel:[String(nivel)],
      id_card:[String(idcard)]
    });
  }
  update(){
    /*this.email = email;
        this.name = name;
        this.id_card = id_card;
        this.level = level;*/ 
    var json={
      email:this.form.value.email,
      name:this.form.value.nombre,
      level:this.form.value.nivel,
      id_card:this.form.value.id_card,
    }
    this.service.updateUser(this.id,json).subscribe(
      (res)=>{
        console.log("Insertado");
      },
      (err)=>{console.log(err)});
  

  }
  delete(){
    this.service.deleteUser(this.id).subscribe(
      (res)=>{
        console.log("Eliminado");
        this.router.navigate(['/admin/manageUsers']);
      },
      (err)=>{console.log(err)});
  }
}
