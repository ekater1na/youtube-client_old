import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { ErrorComponent } from './pages/error/error.component';

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
  declarations: [
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ...materialModules
  ],
  exports: [
    HeaderComponent,
    ErrorComponent,
    ...materialModules
  ]
})
export class CoreModule { }
