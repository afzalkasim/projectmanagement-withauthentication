import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient, HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  employees: Employee[]=[
    {
      id: 1,
      name: "afzal",
      email: "afzal@gmail.com",
      contactnumber: 9994859811
    },
  ];

  constructor(private httpclient:HttpClient) { }

  onGet(){
    return this.employees;
  }
  onAdd(employee: Employee):Observable<any>{
    return this.httpclient.post<any>(this.apiServer + '/emp/', JSON.stringify(employee), this.httpOptions);
  }
  // onDelete(id: number){
  //   let employee = this.employees.find(x=>x.id === id);
  //   let index= this.employees.indexOf(employee);
  //   this.employees.splice(index,1);
  // }
}
