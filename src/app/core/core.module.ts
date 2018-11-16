import { NgModule, SkipSelf, Optional } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.routing.module';
import { loadSvgResource } from '../utils/svg.utils';
import { SharedModule } from '../shared/shared.module';
import { MatIconRegistry } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs'
@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: 'BASE_CONFIG', useValue: "http://localhost:3000" }
  ]
})
export class CoreModule {
  //只加载一次
  //SkipSelf 表示要求到父级去寻找依赖
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载')
    }
    loadSvgResource(ir, ds)
  }
}
