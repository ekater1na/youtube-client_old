import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { SetBorderDirective } from './directives/set-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    DetailedInfoComponent,
    FilteringCriteriaComponent,
    SetBorderDirective,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    DetailedInfoComponent,
    FilteringCriteriaComponent
  ],
  providers: [
    StateService
  ]
})
export class YoutubeModule { }
