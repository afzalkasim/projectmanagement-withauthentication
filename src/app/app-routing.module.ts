import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesUpdateComponent } from './employees-update/employees-update.component';

const routes: Routes = [
  {path:"",component: EmployeesComponent},
  {path:"employee/add/:id",component: EmployeesUpdateComponent },
  {path:"employee/edit/:id",component: EmployeesUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
