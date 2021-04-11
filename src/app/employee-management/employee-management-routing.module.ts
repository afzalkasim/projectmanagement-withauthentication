import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesUpdateComponent } from './employees-update/employees-update.component';
const routes: Routes = [
  {path:"employee",component: EmployeesComponent},
  {path:"employee/update/add/:id",component: EmployeesUpdateComponent },
  {path:"employee/update/edit/:id",component: EmployeesUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }
