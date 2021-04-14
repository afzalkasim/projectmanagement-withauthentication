import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogDeleteRoutingModule } from './dialog-delete-routing.module';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DeleteEmployeeComponent,
    DeleteProjectComponent
  ],
  imports: [
    CommonModule,
    DialogDeleteRoutingModule,
    SharedModule
    
  ]
})
export class DialogDeleteModule { }
