import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  employees: Employee[];
  msg:string;

  constructor(private _fb: FormBuilder, private employeeService: EmployeeService, private router: Router, public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email : ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ["", Validators.required ],
  })
  }

  onSubmit(form:any){
    this.employeeService.login(form.value).subscribe((data)=>{
      console.log("login success"), 
      this.employees=data;
      this.snackbar.open('login successful',' ', {
        duration: 3000,
   
      });
      
    }, err=>{
      console.log("exception occured");
      this.msg="Enter valid email and password";

    })
    this.router.navigateByUrl("/project");
  }

}
