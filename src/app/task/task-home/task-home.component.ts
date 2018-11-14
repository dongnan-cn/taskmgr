import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          completed: false,
          desc: "buy some coffee,if you go, just go asap",
          priority: 3,
          owner: {
            id: 1,
            name: "zhangsan",
            avatar: "avatars:svg-8"
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          completed: true,
          desc: "buy some food",
          priority: 2,
          owner: {
            id: 1,
            name: "lisi",
            avatar: "avatars:svg-8"
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: "进行中",
      tasks: [
        {
          id: 1,
          completed: true,
          desc: "buy some coffee",
          priority: 1,
          owner: {
            id: 1,

            name: "zhangsan",
            avatar: "avatars:svg-8"
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          completed: false,
          desc: "buy some food",
          priority: 2,
          owner: {
            id: 1,
            name: "lisi",
            avatar: "avatars:svg-8"
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ]
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, { data: { title: 'Create Task' } })
  }

  launchCopyTaskkDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } })
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, { data: { title: 'Modify Task', task: task } })
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'Delete Tasks', content: "Are you sure to delete this task list?" } })
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: 'Modify Task List Name'} })
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }
  launchNewTaskListDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'New Task List'} })
    dialogRef.afterClosed().subscribe(result => console.log(result))
  }
}
