import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { SetBorderDirective } from './directives/set-border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { StateService } from './services/state.service';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { SearchService } from './services/sort.service';

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
    YoutubeRoutingModule,
    ...materialModules
  ],
  exports: [],
  providers: [
    StateService,
    SearchService
  ]
})
export class YoutubeModule { }
