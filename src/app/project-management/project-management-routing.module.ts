import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';

const routes: Routes = [
  {path:"project",component:  ProjectDetailsComponent},
  {path:"project/update/add/:id",component:  ProjectUpdateComponent},
  {path:"project/update/edit/:id",component:  ProjectUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }
