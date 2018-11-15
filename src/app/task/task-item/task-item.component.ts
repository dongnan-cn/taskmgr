import { Component, OnInit, Input, EventEmitter, Output, HostBinding, HostListener } from '@angular/core';
import { itemAnim } from 'src/app/anim/item.anim';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {
  @Input() item
  @Input() avatar
  @Output() taskClick = new EventEmitter<void>()
  widerPriority = 'out'

  constructor() { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'hover'
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'out'
  }
  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned'
  }

  onItemClick() {
    this.taskClick.emit()
  }

  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }
}
