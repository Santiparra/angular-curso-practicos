import { Component } from '@angular/core';

import { Ticket } from '../../../../domain/models/ticket.model';

import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticketData: { title: string; request: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(36).substring(2, 15),
      title: ticketData.title,
      request: ticketData.request,
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) =>{ 
      if (ticket.id === ticketId)  {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
