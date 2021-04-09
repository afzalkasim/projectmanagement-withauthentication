import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private apiServer = "http://localhost:3000";
  
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(private httpclient:HttpClient) { }


getAll():Observable<any[]>{
  return this.httpclient.get<any[]>(this.apiServer + '/project/');
}
add(projectdetails: Project):Observable<any>{
  return this.httpclient.post<any>(this.apiServer + '/project/', JSON.stringify(projectdetails), this.httpOptions);
}
update(id:any,projectdetails:any):Observable<any>{
  return this.httpclient.put<any>(this.apiServer + '/project/' + id ,JSON.stringify(projectdetails), this.httpOptions);
}
getById(id:number):Observable<any> {
  return this.httpclient.get<any>(this.apiServer + '/project/' + id)
}
delete(id:number){
  return this.httpclient.delete<any>(this.apiServer + '/project/' + id, this.httpOptions);
}
}