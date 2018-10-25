import { Component, OnInit } from '@angular/core';

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
          desc: "buy some coffee",
          owner: {
            id: 1,
            name: "zhangsan",
            avatar: "avatars:svg-8"
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: "buy some food",
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
          desc: "buy some coffee",
          owner: {
            id: 1,
            name: "zhangsan",
            avatar: "avatars:svg-8"
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: "buy some food",
          owner: {
            id: 1,
            name: "lisi",
            avatar: "avatars:svg-8"
          },
          dueDate: new Date()
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
