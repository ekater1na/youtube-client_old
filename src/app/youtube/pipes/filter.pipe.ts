import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(items: SearchItem[], value: string ): SearchItem[] {
    return items.filter(user => {
      return user.snippet.title.toLowerCase().includes(value.toLowerCase());
    });
  }

}
