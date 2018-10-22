import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit()
  }
}
