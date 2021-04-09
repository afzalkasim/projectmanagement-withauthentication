import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ProjectUpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    SharedModule
  ]
})
export class ProjectManagementModule { }
