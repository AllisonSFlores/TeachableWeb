import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { ChatBoxComponent } from '../../chat-box/chat-box.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild(ChatBoxComponent) box!: ChatBoxComponent;
  messages!:[{"_id": string,
  "writer": string,
  "message": string,
  "time": string}]
  message="";
  id =this.rutaActiva.snapshot.params.id;
  form :FormGroup;
  a=[{"name":"Noticias","link":`/teacher/${this.id}/newsT/${this.id}`},
  {"name":"Salir","link":"/teacher/login"},
  {"name":"Tareas","link":`/teacher/${this.id}/assigmentsT/${this.id}`},
  {"name":"Estudiantes","link":`/teacher/${this.id}/listStudenT/${this.id}`},
  {"name":"Chat","link":`/teacher/${this.id}/chat/${this.id}`}];
  constructor(
    private rutaActiva: ActivatedRoute,
    private teacherService:TeacherService,
    private formBuilder: FormBuilder
  ) { 
    this.form=this.formBuilder.group({
      message:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getMessages()
  }
  sendMessage(){
    this.message = this.form.value.message;
    this.newMessage();
    this.getMessages();
  }
  newMessage(){
    this.teacherService.newMessage(this.id,this.message,new Date().toString()).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{console.log(err)}
    )
  }
  getMessages(){
    this.teacherService.getChat(this.id).subscribe(
      (res)=>{
        this.messages=res[0].chat
      },
      (err)=>{console.log(err)}
    )
  }
}
