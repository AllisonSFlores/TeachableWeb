import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { TeacherRoutingModule } from './teacher-routing.module';
import { NewsComponent } from '../components/teacherComponents/news/news.component';
import { AssignmentsComponent } from '../components/teacherComponents/assignments/assignments.component';
import { ListStudentComponent } from '../components/teacherComponents/list-student/list-student.component';
import { MenuComponent } from '../components/teacherComponents/menu/menu.component';

//modulos
import { SharedModule } from '../components/shared/shared.module';
import { TeacherComponent } from '../components/teacherComponents/teacher/teacher.component';
import { SidenavComponent } from '../components/shared/sidenav/sidenav.component';

@NgModule({
  declarations: [
    TeacherComponent,
    AssignmentsComponent,
    ListStudentComponent,
    MenuComponent,
    NewsComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class TeacherModule { }