import { Component, input, output, signal } from '@angular/core';

import { Ticket } from '../../../../../domain/models/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticketData = input.required<Ticket>();
  detailsVisible = signal(false);
  closeTicket = output();

  onToggleDetails() {
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.closeTicket.emit();
  }
}
