import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[app-droppable]'
})
export class DropDirective {
  @Input() dragEnterClass: string
  constructor(private el: ElementRef, private rd: Renderer2) { }
  
  
  @HostListener('dragenter', ['$event'])
  ondragenter(ev: Event) {
    // 如果动作作用的对象是定义了这个directive的对象，则认为是发起了拖拽
    if (this.el.nativeElement === ev.target) {
      //向这个引用的element添加一个class
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass)
    }
  }

  @HostListener('dragover', ['$event'])
  ondragover(ev: Event) {
    // 如果动作作用的对象是定义了这个directive的对象，则认为是发起了拖拽
    if (this.el.nativeElement === ev.target) {

    }
  }

  @HostListener('dragleave', ['$event'])
  ondragleave(ev: Event) {
    // 如果动作作用的对象是定义了这个directive的对象，则认为是发起了拖拽
    if (this.el.nativeElement === ev.target) {
      //向这个引用的element添加一个class
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass)
    }
  }

  @HostListener('drop', ['$event'])
  ondrop(ev: Event) {
    // 如果动作作用的对象是定义了这个directive的对象，则认为是发起了拖拽
    if (this.el.nativeElement === ev.target) {
      //向这个引用的element添加一个class
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass)
    }
  }

}
