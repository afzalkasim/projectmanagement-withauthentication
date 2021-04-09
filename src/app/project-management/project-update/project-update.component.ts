import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.scss']
})
export class ProjectUpdateComponent implements OnInit {
  editmode:boolean=false;
  id: any;
  header: string;
  projectdetails:Project = {
    id:"",
    clientname:"",
    projectname:"",
    projecttype:"",
    projectdescription:"",
    projectmanager:"",
    startdate:"",
    enddate:""
  };

  constructor(private router: Router,private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id !=0){
      this.GetbyId();
      this.editmode=true;
      this.header="Edit project"
    }
    else{
      this.editmode=false;
      this.header="Add project"
    }

  }
  
  GetbyId(){
    this.projectService.getById(this.id).subscribe(data=>{this.projectdetails=data});
  }
  onSubmit(form: NgForm){
    if(this.editmode){
      this.projectService.update(this.id,form.value).subscribe();
      this.router.navigateByUrl("pro")
    }
    else{
      this.projectService.add(form.value).subscribe(res => {
      this.router.navigateByUrl("pro")})
    }
  }

}
