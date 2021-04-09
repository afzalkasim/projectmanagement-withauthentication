import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';

const routes: Routes = [
  {path:"pro",component:  ProjectDetailsComponent},
  {path:"pro/update/add/:id",component:  ProjectUpdateComponent},
  {path:"pro/update/edit/:id",component:  ProjectUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }
