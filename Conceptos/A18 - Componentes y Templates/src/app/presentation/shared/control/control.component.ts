import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {

  constructor() {
    afterRender(() => {
      console.log('after render');
    });
    afterNextRender(() => {
      console.log('after next render');
    });
  }
  //@HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  //   @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private el = inject(ElementRef);
  label = input.required<string>();
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit(): void {
    console.log('after content init');
  }

  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
