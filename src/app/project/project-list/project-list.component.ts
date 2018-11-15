import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { state } from '@angular/animations';
import { slideToRight } from 'src/app/anim/router.anim';
import { listAnimation } from 'src/app/anim/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state

  projects = [
    {
      "id": 1,
      "name": "project 1",
      "desc": "project 1",
      "coverImg": "assets/img/covers/0.jpg",
    },
    {
      "id": 2,
      "name": "project 2",
      "desc": "project 2",
      "coverImg": "assets/img/covers/1.jpg",
    },
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: 'New Project' } })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.projects = [...this.projects, {
        id: 3,
        name: "for test usage",
        desc: "project 3",
        coverImg: "assets/img/covers/4.jpg"
      }, {
        id: 4,
        name: "for test usage333",
        desc: "project 4",
        coverImg: "assets/img/covers/3.jpg"
      }]
    })
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent)
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: 'Edit Project' } })
  }
  launchConfirmDialog(prj) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'Delete Project', content: "Are you sure to delete this project?" } })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.projects = this.projects.filter(p => p.id !== prj.id)
    })
  }
}
