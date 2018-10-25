import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styles: []
})
export class ProjectItemComponent implements OnInit {
  @Input() item
  @Output() onInvite = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }
  onInviteClick() {
    this.onInvite.emit()
  }
}
