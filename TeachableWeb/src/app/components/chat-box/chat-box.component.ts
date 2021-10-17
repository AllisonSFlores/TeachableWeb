import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  messages = [{
    "Name": 'George Clooney',
    "Message": "The only failure is not to try"
  }, {
    "Name": 'Seth Rogen',
    "Message": "I grew up in Vancouver, man. That's where more than half of my style comes from."
  }, {
    "Name": 'John Lydon',
    "Message": "There's nothing glorious in dying. Anyone can do it."
  }, {
    "Name": 'John Lydon',
    "Message": "There's nothing glorious in dying. Anyone can do it."
  }, {
    "Name": 'John Lydon',
    "Message": "There's nothing glorious in dying. Anyone can do it."
  }, {
    "Name": 'John Lydon',
    "Message": "There's nothing glorious in dying. Anyone can do it."
  }, {
    "Name": 'John Lydon',
    "Message": "There's nothing glorious in dying. Anyone can do it."
  }, {
    "Name": 'John Lydon',
    "Message": "There's nothing glorious in dying. Anyone can do it."
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
