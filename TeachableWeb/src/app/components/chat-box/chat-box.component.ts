import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  @Input() messages!:[{"_id": string,
  "writer": string,
  "message": string,
  "time": string}];
  /*messages = [{
    "Name": 'George Clooney',
    "Message": "The only failure is not to try"
  }, {
    "Name": 'Seth Rogen',
    "Message": "I grew up in Vancouver, man. That's where more than half of my style comes from."
  }];*/
  form :FormGroup;
   message="";
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form=this.formBuilder.group({
      message:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  sendMessage(){
    this.message = this.form.value.message;
  }

}
