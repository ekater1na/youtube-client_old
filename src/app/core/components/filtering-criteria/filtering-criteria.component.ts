import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../youtube/services/state.service';
import { SortingService } from '@core/services/sorting.service';
import { FilterService } from '@core/services/filter.servce';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent implements OnInit {

  constructor(public sortingService: SortingService, public filterService: FilterService) { }

  public ngOnInit(): void {
  }
}
