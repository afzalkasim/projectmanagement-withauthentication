import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesComponent } from 'src/app/employee-management/employees/employees.component';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.scss']
})
export class ProjectUpdateComponent implements OnInit {
  editmode:boolean=false;
  id: any;
  header: string;
  projectdetails:Project = {
    projectId:"",
    clientName:"",
    projectName:"",
    projectType:"",
    projectDescription:"",
    projectManager:"",
    startDate:"",
    endDate:""
  };

  constructor(private router: Router,private route: ActivatedRoute, private projectService: ProjectService, public dialogref: MatDialogRef<EmployeesComponent> ,@Inject(MAT_DIALOG_DATA) public data:any, public snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.id = this.data.id;
    if(this.id !=0){
      this.GetbyId();
      this.editmode=true;
      this.header="Edit project"
    }
    else{
      this.editmode=false;
      this.header="Add project"
    }

  }
  
  GetbyId(){
    this.projectService.getById(this.id).subscribe(data=>{this.projectdetails=data});
  }
  onSubmit(form: NgForm){
    if(this.editmode){
      this.projectService.update(this.id,form.value).subscribe();
      this.snackbar.open('successfully updated')
      this.dialogref.close()
    }
    else{
      this.projectService.add(form.value).subscribe()
      this.snackbar.open('successfully added')
      this.dialogref.close()

    }
    console.log(form.value);
  }

}
