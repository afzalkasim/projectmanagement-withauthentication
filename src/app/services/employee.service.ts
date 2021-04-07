import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[]=[
    {
      id: 1,
      name: "afzal",
      email: "afzal@gmail.com",
      contactnumber: 9994859811
    },
  ];

  constructor() { }

  onGet(){
    return this.employees;
  }
}
