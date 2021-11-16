import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.scss']
})
export class InsertUserComponent implements OnInit {
  form :FormGroup;
  actualPass="";
  constructor(private formBuilder: FormBuilder,private service:AdminService,private _snackBar: MatSnackBar,private emailService:EmailService ) { 

    this.form=this.formBuilder.group({
      nombre:[''],
      email:[''],
      tipo:[''],
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
    this.genPass();
      var json={email:this.form.value.email,
                password:this.actualPass,
                permissionLevel:this.form.value.tipo,
                name:this.form.value.nombre,
                id_card:this.form.value.id_card,
                level:this.form.value.nivel
      };
      this.service.insertUser(json).subscribe(
        (res)=>{
          this.emailService.sendUser(this.form.value.email,this.actualPass);
          console.log("Insertado");
          this.form.reset();
          this._snackBar.open('Valor insertado','',{
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'})
        },
        (err)=>{console.log(err)});
    
  }

  genPass(){
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var pass=""
    for(var i=0;i<8;i++){
      pass+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    console.log(pass);
    this.actualPass= pass;
  }
}
