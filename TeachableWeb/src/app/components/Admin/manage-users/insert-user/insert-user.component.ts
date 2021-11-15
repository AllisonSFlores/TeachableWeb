import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.scss']
})
export class InsertUserComponent implements OnInit {
  form :FormGroup;
  constructor(private formBuilder: FormBuilder,private service:AdminService) { 

    this.form=this.formBuilder.group({
      nombre:[''],
      email:[''],
      tipo:[''],
      password:[''],
      nivel:[''],
      id_card:[''],
    });
  }

  ngOnInit(): void {
  }
  /*
        this.email = email;
        this.password = password;
        this.permissionLevel = permissionLevel;
        this.name = name;
        this.id_card = id_card;
        this.level = level;
   */
  insert(){
      var json={email:this.form.value.email,
                password:this.form.value.password,
                permissionLevel:this.form.value.tipo,
                name:this.form.value.nombre,
                id_card:this.form.value.id_card,
                level:this.form.value.nivel
      };
      this.service.insertUser(json).subscribe(
        (res)=>{
          console.log("Insertado");
        },
        (err)=>{console.log(err)});
    
  }
}
