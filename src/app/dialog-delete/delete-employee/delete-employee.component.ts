import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {
  id: any;
  employees: Employee[];
  constructor(private employeeService: EmployeeService,public dialogref: MatDialogRef<DeleteEmployeeComponent> ,@Inject(MAT_DIALOG_DATA) public data:any, public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.data.id;
    this.getAll()
  }
  getAll(){
    this.employeeService.getAll().subscribe((data: Employee[])=>{
      console.log(data);
      this.employees=data;
    })
  }

  delete(id:any){
    this.employeeService.delete(id).subscribe(data=>{this.getAll();
  });
  this.snackbar.open('successfully deleted')
  this.dialogref.close()
}
 cancelbutton(){
  this.dialogref.close()
 }
}