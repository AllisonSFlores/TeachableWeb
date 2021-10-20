import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from '../components/teacherComponents/news/news.component';
import { AssignmentsComponent } from '../components/teacherComponents/assignments/assignments.component';
import { ListStudentComponent } from '../components/teacherComponents/list-student/list-student.component';
import { TeacherComponent } from '../components/teacherComponents/teacher/teacher.component';
import { ChatComponent } from '../components/teacherComponents/chat/chat.component';

const routes: Routes = [
  {path:'',component:TeacherComponent},
  {path: 'newsT/:id',component:NewsComponent},
  {path: 'assigmentsT/:id',component:AssignmentsComponent},
  {path: 'listStudenT/:id',component:ListStudentComponent},
  {path: 'chat', component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
