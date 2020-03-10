import { NgModule } from '@angular/core';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SetBorderDirective } from './directives/set-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    FilteringCriteriaComponent,
    SetBorderDirective,
    FilterPipe,
    SortPipe,
    DetailsComponent,
    MainPageComponent,
  ],
  imports: [
    YoutubeRoutingModule,
    SharedModule
  ],
  providers: [
    StateService,
  ]
})
export class YoutubeModule { }
