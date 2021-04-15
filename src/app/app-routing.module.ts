import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//   path: 'project',
//   loadChildren: ()=> import('./project-management/project-management.module').then(mode=>mode.ProjectManagementModule),},
//   {path: 'login',
//   loadChildren: ()=> import('./authentication/authentication.module').then(mode=>mode.AuthenticationModule),
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
