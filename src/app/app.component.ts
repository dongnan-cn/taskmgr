import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { keyframes, trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'square',
      [
        state('green', style({ 'background-color': 'green', 'height': '100px', 'transform': 'translateY(100%)' })),
        state('red', style({ 'background-color': 'red', 'height': '100px', 'transform': 'translateY(-100%)' })),
        // 缓动函数
        transition('green => red', animate('.8s ease-in')),
        transition('red => green', animate(5000, keyframes([
          style({transform:'translateY(-100%)'}),
          style({transform:'translateY(-98%)'}),
          style({transform:'translateY(-95%)'}),
          style({transform:'translateY(-50%)'}),
          style({transform:'translateY(-20%)'}),
          style({transform:'translateY(-15%)'}),
          style({transform:'translateY(-10%)'}),
        ]))),
      ])
  ]
})
export class AppComponent {
  squareState: string
  useDarkTheme = false

  constructor(private oc: OverlayContainer) {

  }

  switchTheme(checked: boolean) {
    this.useDarkTheme = checked
    if (checked) {
      this.oc.getContainerElement().classList.add('myapp-dark-theme');
    } else {
      this.oc.getContainerElement().classList.remove('myapp-dark-theme');
    }
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red'
  }
}
