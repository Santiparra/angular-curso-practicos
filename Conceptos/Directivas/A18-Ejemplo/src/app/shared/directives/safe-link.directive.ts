import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmRedirect($event)',
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  constructor() {}

  queryParam = input('my-app', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  onConfirmRedirect(event: MouseEvent) {
    const wantsToLeave = window.confirm(
      'You are about to leave the page. Are you sure?'
    );

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
