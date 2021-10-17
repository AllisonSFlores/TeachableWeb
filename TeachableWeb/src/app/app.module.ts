import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';

//modulos
import { TeacherModule } from './teacherModule/teacher.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TeacherModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
