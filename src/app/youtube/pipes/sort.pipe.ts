import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
