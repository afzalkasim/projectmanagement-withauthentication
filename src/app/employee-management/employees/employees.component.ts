import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeesUpdateComponent } from '../employees-update/employees-update.component';
import {MatDialog} from '@angular/material/dialog';
import { DeleteEmployeeComponent } from 'src/app/dialog-delete/delete-employee/delete-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      console.log(data);
      this.employees=data;
    })
  }
  // Delete(id:any){
  //   this.employeeService.delete(id).subscribe(data=>{this.getAll();
  //   });
  // }
  addDialog() {
    const dialogRef = this.dialog.open(EmployeesUpdateComponent,{
      width: '660px',
      height: '560px',
      data: {id:'0'}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  editDialog(employeeid:any) {
    const dialogRef = this.dialog.open(EmployeesUpdateComponent,{
      width: '660px',
      height: '560px',
      data: {id:employeeid}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteDialog(employeeid:any) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent,{
      width: '300px',
      height: '200px',
      data: {id:employeeid}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


