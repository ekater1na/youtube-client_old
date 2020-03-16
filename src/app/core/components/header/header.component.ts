import { Component, OnInit } from '@angular/core';
import { StatePages } from '../../models/state-pages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showFilter: boolean = false;

  public searchStr: string = '';
  public statePages: StatePages;

  constructor(private router: Router) { }

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

  public goTo(url): void {
    for (const page of Object.keys(this.statePages)) {
      this.statePages[page] = `/${page}` === url;
    }
    this.router.navigateByUrl(url);
  }
}


