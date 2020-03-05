import { NgModule, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
