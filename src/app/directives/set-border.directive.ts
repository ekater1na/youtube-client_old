import { Directive, ElementRef, Renderer2, OnChanges, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSetBorder]'
})
export class SetBorderDirective implements OnChanges {
  private borderColor: string;
  @Input() public publicationDate: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {

    this.setBoxShadow();
   }

   public ngOnChanges(): void {
    this.borderColor = '#FFFF00';

    const date: Date = new Date(this.publicationDate);
    const  daysLag: number = Math.ceil(Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24));
    if (daysLag < 31) {
      this.borderColor = '#008000';
     }
    if (daysLag < 7) {
      this.borderColor = '#0000FF';
    }
    if (daysLag > 180) {
      this.borderColor = '#FF0000';
   }
    this.setBoxShadow(`${this.borderColor}`);
   }

   public setBoxShadow(color: string = '#FFFF00', size: string = '7'): void {
    this.renderer2.setStyle(this.elementRef.nativeElement,
                            'box-shadow', `0px ${size}px 0px 0px ${color}`);
   }
}