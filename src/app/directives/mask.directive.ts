import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mask]'
})
export class MaskDirective {
  @Input('mask') mask: string = '';

  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: InputEvent) {
    if (event.inputType == 'deleteContentBackward' || this.mask.length == 0) return;

    const initialValue: string = this.element.nativeElement.value;
    if (initialValue) initialValue.replace(/[^0-9]*/g, '');
    if (initialValue != this.element.nativeElement.value) event.stopPropagation();

    if (initialValue) this.element.nativeElement.value = this.format(this.mask, initialValue);
  }

  format(mask: string, value: any): string {
    let text = '';
    let data = value;
    let c, m, i, x;

    for (i = 0, x = 1; x && i < mask.length; ++i) {
      c = data.charAt(i);
      m = mask.charAt(i);

      switch (mask.charAt(i)) {
        case '#':
          if (/\d/.test(c)) text += c;
          else x = 0;
          break;
        case 'A':
          if (/[a-z]/i.test(c)) text += c;
          else x = 0;
          break;
        case 'N':
          if (/[a-z0-9]/i.test(c)) x += c;
          else x = 0;
          break;
        case 'X':
          text += c;
          break;
        default:
          text += m;
          break;
      }
    }

    return text;
  }
}
