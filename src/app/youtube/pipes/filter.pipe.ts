import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(searchItemsArray: SearchItem[], pattern: string): SearchItem[] {
    if (!pattern.trim()) {
      return searchItemsArray;
    }

    searchItemsArray = searchItemsArray.filter((item) => {
      return item.snippet.title.toLowerCase().includes(pattern.toLowerCase());
    });

    return searchItemsArray;
  }

}
