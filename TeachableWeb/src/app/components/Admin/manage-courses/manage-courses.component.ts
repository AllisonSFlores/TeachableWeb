import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.scss']
})
export class ManageCoursesComponent implements OnInit {
data:any;
  constructor( private service:AdminService) {}
  ngOnInit(): void {
    this.getCourses();
  }
  async getCourses(){
    this.data=await this.service.getAllCourses();
  }

}
