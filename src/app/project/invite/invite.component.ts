import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styles: []
})
export class InviteComponent implements OnInit {
  items = [
    {
      id: 1,
      name: "AAA"
    },
    {
      id: 2,
      name: "BBB"
    },
    {
      id: 3,
      name: "CCC"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  displayUser(user: { id: string, name: string }) {
    return user ? user.name : ''
  }
}
