import { Directive, HostListener, Input } from '@angular/core';
import { Util } from '../util/util';

declare const animateScrollTo;
declare const $;

@Directive({
  selector: '[appScrollToElement]'
})
export class ScrollToElementDirective {

  @Input() appScrollToElement: any;

  @HostListener('click') onHover() {

    if (Util.isClient) {
      animateScrollTo($(this.appScrollToElement)[0]);
    }
  }

}
