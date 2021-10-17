import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TeacherModule } from './teacherModule/teacher.module';
const routes: Routes = [
  //{path:'', component:SidenavComponent},
  {path:'teacher',component:TeacherModule},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
