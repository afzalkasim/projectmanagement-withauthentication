import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesUpdateComponent } from './employees-update/employees-update.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeesComponent,EmployeesUpdateComponent],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    SharedModule
  ]
})
export class EmployeeManagementModule { }
