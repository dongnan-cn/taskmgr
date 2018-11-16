import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {
  
  @Output() dropped: EventEmitter<DragData> = new EventEmitter();
  @Input() dragEnterClass: string = ''
  @Input() dropTags: string[] = []
  private drag$

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService) {
    this.drag$ = this.service.getDragData().pipe(take(1))
  }

  @HostListener('dragenter', ['$event'])
  ondragenter(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.dropEffect', 'move');
        }
      });
    }
  }








  @HostListener('dragover', ['$event'])
  ondragover(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  ondragleave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(<string>dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('drop', ['$event'])
  ondrop(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }

}
