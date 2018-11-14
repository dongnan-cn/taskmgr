import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styles: []
})
export class NewTaskListComponent implements OnInit {
  title = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewTaskListComponent>) { }

  ngOnInit() {
  }

  onClick() {
    this.dialogRef.close(this.title)
  }
}
