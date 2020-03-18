import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(searchItemsArray: SearchItem[], criteria: string): SearchItem[] {

    switch (criteria) {
      case 'date':
        return searchItemsArray.sort((a, b) => {
          const prev: number = +a.snippet.publishedAt.match(/\d/g).join('');
          const next: number = +b.snippet.publishedAt.match(/\d/g).join('');

          return next - prev;
        });

      case 'views':
        return searchItemsArray.sort((a, b) => {
          return +b.statistics.viewCount - +a.statistics.viewCount ;
        });
      default: return searchItemsArray;
    }

  }

}
