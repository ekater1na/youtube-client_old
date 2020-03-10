import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginComponent, LoginPageComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  exports: [LoginPageComponent],
  providers: [AuthService]
})
export class AuthModule { }
