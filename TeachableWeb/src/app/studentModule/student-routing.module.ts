import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from '../components/studentComponents/news/news.component';
import { AssignmentsComponent } from '../components/studentComponents/assignmentsS/assignments.component';
import { ListStudentComponent } from '../components/teacherComponents/list-student/list-student.component';
import { StudentComponent } from '../components/studentComponents/student/student.component';
import { ChatComponent } from '../components/studentComponents/chatS/chat.component';

const routes: Routes = [
  {path:'',component:StudentComponent},
  {path: 'newsS/:id',component:NewsComponent},
  {path: 'assigmentsS/:id',component:AssignmentsComponent},
  {path: 'listStudenS/:id',component:ListStudentComponent},
  {path: 'chatS/:id', component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
