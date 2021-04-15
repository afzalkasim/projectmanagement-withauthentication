import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProjectComponent } from 'src/app/dialog-delete/delete-project/delete-project.component';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { ProjectUpdateComponent } from '../project-update/project-update.component';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectdetails: Project[];
  dataSource:any
  constructor(private projectService: ProjectService, private dialog:MatDialog) { }
  displayedColumns = ['clientName','projectName','projectType','projectDescription','projectManager','startDate','endDate','editDialog','deleteDialog']
  ngOnInit(): void {
    this.getAll();
    this.dataSource=this.projectdetails;
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
    // addDialog() {
    //   const dialogRef = this.dialog.open(ProjectUpdateComponent,{
    //     width: '660px',
    //     height: '560px',
    //     data: {id:'0'}
  
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log(`Dialog result: ${result}`);
    //   });
    // }
    editDialog(projectid:any) {
      const dialogRef = this.dialog.open(ProjectUpdateComponent,{
        width: '660px',
        height: '560px',
        data: {id:projectid}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.getAll()
      });
    }
    deleteDialog(projectid:any) {
      const dialogRef = this.dialog.open(DeleteProjectComponent,{
        width: '300px',
        height: '200px',
        data: {id:projectid}
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.getAll()
      });
    }

}