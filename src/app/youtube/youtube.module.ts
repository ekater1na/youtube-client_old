import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SetBorderDirective } from './directives/set-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SetBorderDirective,
    FilterPipe,
    SortPipe,
    DetailedPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
  providers: []
})
export class YoutubeModule { }
