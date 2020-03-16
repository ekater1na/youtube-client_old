import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public item: SearchItem;
  public publicationDate: string;

    constructor(private router: Router) {}

  public ngOnInit(): void {
    this.publicationDate = this.item.snippet.publishedAt;
  }

  public goToDetails(): void {
    this.router.navigate(['video', this.item.id]);
  }
}
