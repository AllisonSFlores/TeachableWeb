import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
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
  b=[{"name":"Noticias","link":`/student/${this.id}/newsS/${this.id}`},
  {"name":"Salir","link":"/"},
  {"name":"Tareas","link":`/student/${this.id}/assigmentsS/${this.id}`},
  {"name":"Profesor","link":`/student/${this.id}/teacherCourse/${this.id}`},
  // {"name":"Estudiantes","link":`/student/${this.id}/listStudenS/${this.id}`},
  {"name":"Chat","link":`/student/${this.id}/chatS/${this.id}`}];
  constructor(
    private rutaActiva: ActivatedRoute,
    private studentService:StudentService,
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
    this.studentService.newMessage(this.id,this.message,new Date().toString()).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{console.log(err)}
    )
  }
  getMessages(){
    this.studentService.getChat(this.id).subscribe(
      (res)=>{
        this.messages=res[0].chat
      },
      (err)=>{console.log(err)}
    )
  }
}
