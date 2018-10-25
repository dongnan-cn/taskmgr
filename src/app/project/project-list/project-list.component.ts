import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      "name": "project 1",
      "desc": "project 1",
      "coverImg": "assets/img/covers/0.jpg",
    },
    {
      "name": "project 2",
      "desc": "project 2",
      "coverImg": "assets/img/covers/1.jpg",
    },
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: 'asdfsafs' })
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }
}
