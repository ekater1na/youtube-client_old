import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
import { SearchItem } from '../../models/search-item.model';
import { RESPONSE } from 'src/app/shared/data';
import { YoutubeDataService } from '@core/services/youtube-data.service';
import { SortingService } from '@core/services/sorting.service';
import { FilterService } from '@core/services/filter.servce';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  constructor(
    public youtubeDataService: YoutubeDataService,
    public sortingService: SortingService,
    public filterService: FilterService
  ) { }


}
