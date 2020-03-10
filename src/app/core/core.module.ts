import { NgModule, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [HeaderComponent, Error404Component],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent, Error404Component
  ]
})
export class CoreModule { }
