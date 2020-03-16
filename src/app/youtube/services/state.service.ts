import { Injectable, OnChanges } from '@angular/core';
import { SearchResponse } from '../models/search-response.model';
import { RESPONSE } from 'src/app/shared/data';

@Injectable({
  providedIn: 'root'
})
export class StateService implements OnChanges {
  public searchResponse: SearchResponse;
  public bySort: string = '';
  public searchInTitles: string = '';

  constructor() { }

  public getResponseAll(): SearchResponse {
    return RESPONSE;
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
