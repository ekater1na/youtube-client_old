import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showFilter: boolean = false;

  public searchStr: string = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public onShowFilter(): void {
    this.showFilter = !this.showFilter;
  }
}
