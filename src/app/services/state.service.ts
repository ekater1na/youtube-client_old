import { Injectable, OnChanges } from '@angular/core';
import { SearchResponse } from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class StateService implements OnChanges {
  public searchResponse: SearchResponse;
  public bySort: string = '';
  public searchInTitles: string = '';

  constructor() { }

  public getResponseAll(): SearchResponse {
    return SearchItem;
  }

  public ngOnChanges(): void {
    localStorage.setItem(
      'state',
      JSON.stringify({
        'searchInTitles': this.searchInTitles,
        'bySort': this.bySort,
      }),
    );
  }
}
