import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionsComponent } from './components/Admin/functions/functions.component';
import { ManageCoursesComponent } from './components/Admin/manage-courses/manage-courses.component';
import { ManageStudentComponent } from './components/Admin/manage-courses/manage-student/manage-student.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherModule } from './teacherModule/teacher.module';
const routes: Routes = [
  {path:'teacher/:id', loadChildren: () => import ('./teacherModule/teacher.module').then(x => x.TeacherModule)},
  {path: 'login', component:LoginComponent},
  {path: 'listCourses',component:ListCoursesComponent},
  {path: 'admin',component:FunctionsComponent},
  {path: 'manageCourses',component:ManageCoursesComponent},
  {path: 'manageUsers',component:ManageStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
