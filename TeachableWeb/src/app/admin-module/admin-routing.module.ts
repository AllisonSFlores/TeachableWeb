import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionsComponent } from '../components/Admin/functions/functions.component';
import { ManageCoursesComponent } from '../components/Admin/manage-courses/manage-courses.component';
import { ManageStudentComponent } from '../components/Admin/manage-courses/manage-student/manage-student.component';
import { InsertCourseComponent } from '../components/Admin/manage-courses/insert-course/insert-course.component';
import { ManageUsersComponent } from '../components/Admin/manage-users/manage-users.component';
import { UpdateCourseComponent } from '../components/Admin/manage-courses/update-course/update-course.component';
import { InsertUserComponent } from '../components/Admin/manage-users/insert-user/insert-user.component';
import { UpdateUserComponent } from '../components/Admin/manage-users/update-user/update-user.component';
const routes: Routes = [
  {path: '',component:FunctionsComponent},
  {path: 'manageCourses',component:ManageCoursesComponent},
  {path: 'manageUsers',component:ManageUsersComponent},
  {path: 'insertCourse',component:InsertCourseComponent},
  {path: 'manageStudent',component:ManageStudentComponent},
  {path: 'updateCourse',component:UpdateCourseComponent},
  {path: 'insertUser',component:InsertUserComponent},
  {path: 'updateUser',component:UpdateUserComponent}

  ];

  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class adminRoutingModule { }
