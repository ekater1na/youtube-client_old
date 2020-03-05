import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
import { SearchItem } from './../../models/search-item.model';
import { RESPONSE } from 'src/app/data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public response: SearchResponse = RESPONSE;
  public videos: SearchItem[] = [];

  constructor() { }

  public ngOnInit(): void {
  }

}
