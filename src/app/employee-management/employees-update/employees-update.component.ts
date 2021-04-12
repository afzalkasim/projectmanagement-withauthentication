import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.scss']
})
export class EmployeesUpdateComponent implements OnInit {
  editmode:boolean=false;
  id: any;
  header: string;
  employee:Employee = {
    employeeId:"",
    name:"",
    email:"",
    contactNumber:"",
    location:""
  };
  
  constructor(private router: Router,private route: ActivatedRoute, private employeeService: EmployeeService,public dialogref: MatDialogRef<EmployeesComponent> ,@Inject(MAT_DIALOG_DATA) public data:any, public snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.id = this.data.id;
    if(this.id !=0){
      this.GetbyId();
      this.editmode=true;
      this.header="Edit employee"
    }
    else{
      this.editmode=false;
      this.header="Add employee"
    }

  }
  
  GetbyId(){
    this.employeeService.getById(this.id).subscribe(data=>{this.employee=data});
  }
  onSubmit(form: NgForm){
    if(this.editmode){
      this.employeeService.update(this.id,form.value).subscribe();
      console.log(form.value)
      this.snackbar.open('successfully updated')
      this.dialogref.close()
    }
    else{
      this.employeeService.add(form.value).subscribe()
      this.snackbar.open('successfully added')
      this.dialogref.close()
    }
  }

}


