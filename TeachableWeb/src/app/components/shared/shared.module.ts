import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    
  ],
  exports:[
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
  ],
})
export class SharedModule { }
