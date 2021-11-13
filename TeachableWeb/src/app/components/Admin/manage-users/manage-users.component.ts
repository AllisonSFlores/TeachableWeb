import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  data=[{nombre:"juan",id:1},{nombre:"Allison",id:2}]
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){}

}
