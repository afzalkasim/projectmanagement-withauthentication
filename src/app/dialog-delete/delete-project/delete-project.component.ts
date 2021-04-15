import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss']
})
export class DeleteProjectComponent implements OnInit {
  id: any;
  projectdetails: Project[];
  constructor(private projectService: ProjectService,public dialogref: MatDialogRef<DeleteProjectComponent> ,@Inject(MAT_DIALOG_DATA) public data:any, public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.data.id;
    this.getAll()
  }

  getAll(){
    this.projectService.getAll().subscribe((data: Project[])=>{
      console.log(data);
      this.projectdetails=data;
    })
  }

  delete(id:any){
    this.projectService.delete(id).subscribe(data=>{this.getAll();
  });
  this.snackbar.open('successfully deleted')
  this.dialogref.close()
}
 cancelbutton(){
  this.dialogref.close()
 }
}
