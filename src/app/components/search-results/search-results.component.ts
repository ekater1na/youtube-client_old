import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public searchResponse: SearchResponse;

  // tslint:disable-next-line: typedef
  public users = [
    {name: 'name 1'},
    {name: 'name 2'},
    {name: 'name 3'},
    {name: 'name 4'}
  ];

  @Input() public user: {};

  constructor() { }

  public ngOnInit(): void {
  }

}
