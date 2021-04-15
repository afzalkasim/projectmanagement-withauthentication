import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../shared/util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  

  constructor(private _fb: FormBuilder) { }
  

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
