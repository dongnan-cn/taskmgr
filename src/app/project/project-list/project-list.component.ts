import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      "name":"project 1",
      "desc":"project 1",
      "coverImg":"assets/img/cover/1.jpg",
    },
    {
      "name":"project 2",
      "desc":"project 2",
      "coverImg":"assets/img/cover/1.jpg",
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
