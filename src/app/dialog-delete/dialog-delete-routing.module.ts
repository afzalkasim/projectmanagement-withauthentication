import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const routes: Routes = [
  {path:"",component: DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogDeleteRoutingModule { }
