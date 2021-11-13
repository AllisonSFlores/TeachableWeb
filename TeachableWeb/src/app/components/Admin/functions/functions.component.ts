import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
  data=[]
  constructor( service:AdminService) {
    service.getAllUsers().subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{console.log(err)});
  }

  ngOnInit(): void {
  }

}
