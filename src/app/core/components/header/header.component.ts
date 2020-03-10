import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/youtube/services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showFilter: boolean = false;

  public searchStr: string = '';

  constructor(public stateService: StateService, private router: Router) { }

  public ngOnInit(): void {}

  public onShowFilter(): void {
    this.showFilter = !this.showFilter;
  }

  public onSearchInTitles(word: string): void {
    this.stateService.searchInTitles  = word;
  }
}
