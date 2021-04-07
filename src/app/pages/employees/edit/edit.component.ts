import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: any;
  header: string;

  constructor(private router: Router,private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? 'Add Employee': 'Edit Employee';
  }
  onSubmit(form: NgForm){
    // console.log(form.value);
    // let employee: Employee = {
    //   id: form.value.id,
    //   name: form.value.name,
    //   email: form.value.email,
    //   contactnumber: form.value.contactnumber
    // }
    // this.employeeService.onAdd(employee);
    // this.router.navigateByUrl("");
    this.employeeService.onAdd(form.value).subscribe(res => {
      console.log('User created!')
      this.router.navigateByUrl("")})
  }

}
