import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectdetails: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.projectService.getAll().subscribe((data: Project[])=>{
      console.log(data);
      this.projectdetails=data;

    })
  }
    Delete(id:any){
      this.projectService.delete(id).subscribe(data=>{this.getAll();
      });
    }
  

}
