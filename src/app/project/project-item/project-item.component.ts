import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from 'src/app/anim/card.anim';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {
  @Input() item
  @Output() onInvite = new EventEmitter<void>()
  @Output() onEdit = new EventEmitter<void>()
  @Output() onDelete = new EventEmitter<void>()
  @HostBinding('@card') cardState = 'out'

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.cardState = 'hover'
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.cardState = 'out'
  }

  onInviteClick() {
    this.onInvite.emit()
  }
  onEditClick() {
    this.onEdit.emit()
  }

  onDeleteClick() {
    this.onDelete.emit()
  }
}
