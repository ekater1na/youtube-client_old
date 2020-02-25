import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
import { SearchItem } from './../../models/search-item.model';
import { RESPONSE } from './../../data';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public response: SearchResponse = RESPONSE;
  public videos: SearchItem[] = [];

  constructor(
    public stateService: StateService
  ) { }

  public ngOnInit(): void {
    this.response = this.stateService.getResponseAll();
  }

}
