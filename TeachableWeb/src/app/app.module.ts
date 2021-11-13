import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

//componentes
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FunctionsComponent } from './components/Admin/functions/functions.component';
import { ManageCoursesComponent } from './components/Admin/manage-courses/manage-courses.component';
import { ManageUsersComponent } from './components/Admin/manage-users/manage-users.component';
import { InsertCourseComponent } from './components/Admin/manage-courses/insert-course/insert-course.component';
import { UpdateCourseComponent } from './components/Admin/manage-courses/update-course/update-course.component';
import { ManageStudentComponent } from './components/Admin/manage-courses/manage-student/manage-student.component';
import { InsertUserComponent } from './components/Admin/manage-users/insert-user/insert-user.component';
import { UpdateUserComponent } from './components/Admin/manage-users/update-user/update-user.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { InsertStudentCourseComponent } from './components/Admin/manage-courses/manage-student/insert-student-course/insert-student-course.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListCoursesComponent,
    FunctionsComponent,
    ManageCoursesComponent,
    ManageUsersComponent,
    InsertCourseComponent,
    UpdateCourseComponent,
    ManageStudentComponent,
    InsertUserComponent,
    UpdateUserComponent,
    InsertStudentCourseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }