import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SetBorderDirective } from './directives/set-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { StateService } from './services/state.service';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    FilteringCriteriaComponent,
    SetBorderDirective,
    FilterPipe,
    SortPipe,
    MainPageComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule
  ],
  exports: [MainPageComponent],
  providers: [StateService]
})
export class YoutubeModule { }
