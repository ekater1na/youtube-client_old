import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';

// tslint:disable-next-line: typedef
const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatInputModule,
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    ...materialModules
  ],
  exports: [
    LoginComponent,
    ...materialModules
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
