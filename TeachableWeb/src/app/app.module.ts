import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { FunctionsComponent } from './components/admin/functions/functions.component';
import { ManageCoursesComponent } from './components/admin/manage-courses/manage-courses.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { InsertCourseComponent } from './components/admin/manage-courses/insert-course/insert-course.component';
import { UpdateCourseComponent } from './components/admin/manage-courses/update-course/update-course.component';
import { ManageStudentComponent } from './components/admin/manage-courses/manage-student/manage-student.component';
import { InsertUserComponent } from './components/admin/manage-users/insert-user/insert-user.component';
import { UpdateUserComponent } from './components/admin/manage-users/update-user/update-user.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';


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
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }