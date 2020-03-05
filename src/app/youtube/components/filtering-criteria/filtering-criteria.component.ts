import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent implements OnInit {

  constructor(public stateService: StateService) { }

  public ngOnInit(): void {
  }

  public onSortBy(order: string): void {
    if (this.stateService.bySort !== order) {
      this.stateService.bySort = order;
    } else {
      this.stateService.bySort = null;
    }
  }

}
