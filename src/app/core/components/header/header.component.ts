import { Component, OnInit } from '@angular/core';
import { StatePages } from '../../models/state-pages';
import { Router } from '@angular/router';
import { StateService } from 'src/app/youtube/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showFilter: boolean = false;

  public searchStr: string = '';
  public statePages: StatePages;

  constructor(public stateService: StateService, private router: Router) { }

  public ngOnInit(): void {
    this.statePages = {
      main: true,
      login: false,
      video: false
    };
  }

  public onShowFilter(): void {
    this.showFilter = !this.showFilter;
  }

  public onSearchInTitles(word: string): void {
    this.stateService.searchInTitles  = word;
  }

  public goTo(url: string): void {
    for (const page of Object.keys(this.statePages)) {
      this.statePages[page] = `/${page}` === url;
    }
    this.router.navigateByUrl(url);
  }
}
