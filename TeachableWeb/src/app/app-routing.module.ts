import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  //{path:'', component:SidenavComponent},
  {path:'teacher',component:TeacherComponent},
  {path: 'login', component:LoginComponent},
  {path: 'newsT',component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
