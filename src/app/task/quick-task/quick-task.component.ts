import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styles: []
})
export class QuickTaskComponent implements OnInit {
  
  
  @Output() quickTask = new EventEmitter()
  desc: string
  constructor() { }

  ngOnInit() {
  }

  @HostListener('keyup.enter')
  sendQuickTask() {
    if(!this.desc ||
      this.desc.length === 0 ||
      !this.desc.trim()){

    }
    this.quickTask.emit(this.desc)
    this.desc = ''
  }
}
