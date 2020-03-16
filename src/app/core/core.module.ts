import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    Error404Component,
    Error404PageComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [SharedModule, HomePageComponent, HeaderComponent],
  providers: [AuthService]
})
export class CoreModule { }
