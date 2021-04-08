import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  constructor(private httpclient:HttpClient) { }


  getAll():Observable<any[]>{
    return this.httpclient.get<any[]>(this.apiServer + '/emp/');
  }
  add(employee: Employee):Observable<any>{
    return this.httpclient.post<any>(this.apiServer + '/emp/', JSON.stringify(employee), this.httpOptions);
  }
  update(id:any,employee:any):Observable<any>{
    return this.httpclient.put<any>(this.apiServer + '/emp/' + id ,JSON.stringify(employee), this.httpOptions);
  }
  getById(id:number):Observable<any> {
    return this.httpclient.get<any>(this.apiServer + '/emp/' + id)
  }
  delete(id:number){
    return this.httpclient.delete<any>(this.apiServer + '/emp/' + id, this.httpOptions);
  }
}
