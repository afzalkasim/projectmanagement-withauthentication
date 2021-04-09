import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      console.log(data);
      this.employees=data;
    })
  }
  Delete(id:any){
    this.employeeService.delete(id).subscribe(data=>{this.getAll();
    });
  }

}
