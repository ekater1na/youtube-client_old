import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SetBorderDirective } from './directives/set-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    FilteringCriteriaComponent,
    SetBorderDirective,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule
  ],
  exports: [
    SearchResultsComponent,
    FilteringCriteriaComponent
  ]
})
export class YoutubeModule { }
