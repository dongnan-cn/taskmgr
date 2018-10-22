import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingComponent } from './login.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    LoginRoutingComponent,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
