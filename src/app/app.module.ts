import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeManagementModule } from './employee-management/employee-management.module';
import { ProjectManagementModule} from './project-management/project-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteEmployeeComponent } from './dialog-delete/delete-employee/delete-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    DeleteEmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeManagementModule,
    ProjectManagementModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
