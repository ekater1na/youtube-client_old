import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeApiInterceptor } from './interceptors/youtube-api.interceptor';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    Error404Component,
    Error404PageComponent,
    FilteringCriteriaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [SharedModule, HomePageComponent, HeaderComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: YoutubeApiInterceptor,
    multi: true
  }]
})
export class CoreModule { }
