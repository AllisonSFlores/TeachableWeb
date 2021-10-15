import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'newsS',component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
