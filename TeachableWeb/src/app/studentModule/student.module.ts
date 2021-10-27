import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { StudentRoutingModule } from './student-routing.module';
import { NewsComponent } from '../components/studentComponents/newsS/news.component';
import { AssignmentsComponent } from '../components/studentComponents/assignmentsS/assignments.component';
//import { ListStudentComponent } from '../components/teacherComponents/list-student/list-student.component';
import { MenuComponent } from '../components/studentComponents/menuS/menu.component';

//modulos
import { SharedModule } from '../components/shared/shared.module';
import { StudentComponent } from '../components/studentComponents/student/student.component';
import { SidenavComponentS } from '../components/shared/sidenav/sidenav.componentS';
import { ChatBoxComponentS } from '../components/chat-box/chat-box.componentS';
import { ChatComponent } from '../components/studentComponents/chatS/chat.component';

@NgModule({
  declarations: [
    StudentComponent,
    AssignmentsComponent,
    //ListStudentComponent,
    MenuComponent,
    NewsComponent,
    SidenavComponentS,
    ChatBoxComponentS,
    ChatComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class StudentModule { }