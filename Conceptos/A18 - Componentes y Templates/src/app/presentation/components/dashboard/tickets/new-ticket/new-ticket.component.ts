import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ticket } from '../../../../../domain/models/ticket.model';
import { ButtonComponent } from '../../../../shared/button/button.component';

import { ControlComponent } from '../../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  constructor() {}
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  addTicket = output<{ title: string; request: string }>();

  enteredTitle = '';
  enteredRequest = '';
  //@Output() addTicket = new EventEmitter<Ticket>();
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    this.addTicket.emit({ title: this.enteredTitle, request: this.enteredRequest });
    //this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredRequest = '';
  }
}
