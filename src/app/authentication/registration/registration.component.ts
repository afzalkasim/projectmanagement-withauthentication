import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ConfirmedValidator } from '../../shared/util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  msg:string;
  

  constructor(private _fb: FormBuilder, private employeeService: EmployeeService, private router: Router, public snackbar:MatSnackBar) { }
  

  ngOnInit(): void {
    this.form = this._fb.group({
      email : ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      firstName: ["", [Validators.required, Validators.pattern(/^[A-Za-z]+$/) ]],
      lastName: ["", [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      password: ["", Validators.required ],
      confirmPassword: ["", Validators.required,  ]}, {validators: ConfirmedValidator('password', 'confirmPassword') 
  })
  }

  onSubmit(form:any){
    this.employeeService.register(form.value).subscribe((data)=>{
      console.log("success"), 
      this.snackbar.open('Registered successfully',' ', {
        duration: 3000,
        
   
      });
      this.router.navigateByUrl("/login");
      
    }, err=>{
      console.log("exception occured");
      this.msg="This email is already existed";

    })
    
  }
  
  passwordErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.form.controls['password'].touched && this.form.invalid;
      return controlInvalid || formInvalid;
    }
  }

  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.form.controls['confirmPassword'].touched && this.form.invalid;
      return controlInvalid || formInvalid;
    }
  }

}
