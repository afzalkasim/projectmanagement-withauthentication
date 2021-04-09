import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  declarations: [
   
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  entryComponents: [


 
  ]
})
export class SharedModule { }
