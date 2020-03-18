import { Directive, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBorder]'
})
export class SetBorderDirective implements OnInit {
  @Input('appSetBorder') public date: string;

  @HostBinding('style.borderBottom') public mark: string;

  public ngOnInit(): void {
    const now: Date = new Date();
    const date: Date = new Date(this.date.replace(/-/g, '/'));
    const millisecondsDifference: number = Math.abs(+now - +date);

    const daysDifference: number = millisecondsDifference / 86400000;

    if (daysDifference < 7) {
      this.mark = '5px solid #0000FF';
      return;
    } else if (daysDifference < 31) {
      this.mark = '5px solid #008000';
      return;
    } else if (daysDifference < 183) {
      this.mark = '5px solid #FF0000';
    } else if (daysDifference > 183) {
      this.mark = '5px solid #FFFF00';
    }
  }
}
