import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

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
    id:"",
    name:"",
    email:"",
    contactnumber:"",
    location:""
  };

  constructor(private router: Router,private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // this.header = this.id === "0"? 'Add Employee': 'Edit Employee';
    this.id = this.route.snapshot.paramMap.get('id');
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
      this.router.navigateByUrl("")
    }
    else{
      this.employeeService.add(form.value).subscribe(res => {
      console.log('User created!')
      this.router.navigateByUrl("")})
    }
  }

}

