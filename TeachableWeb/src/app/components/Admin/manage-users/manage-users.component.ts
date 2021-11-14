import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  data:any;
  constructor( private service:AdminService) {}
  
  async getUsers(){
    this.data=await this.service.getAllUsers();
  }
  ngOnInit(): void {
    this.getUsers();
  }

  agregar(){}

}
