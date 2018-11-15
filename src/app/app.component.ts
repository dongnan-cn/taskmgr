import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}
