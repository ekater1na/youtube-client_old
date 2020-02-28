import { Injectable, OnChanges } from '@angular/core';
import { RESPONSE } from '../../data';
import { SearchResponse } from 'src/app/shared/models/search-response.model';

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
