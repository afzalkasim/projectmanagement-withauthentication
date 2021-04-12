import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule
   
  ],
  declarations: [
   
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule
    
  ],
  entryComponents: [


 
  ]
})
export class SharedModule { }
