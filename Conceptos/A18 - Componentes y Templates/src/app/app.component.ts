import { Component } from '@angular/core';

import {
  HeaderComponent,
  ServerStatusComponent,
  TicketsComponent,
  TrafficComponent,
} from './presentation/components';
import { DashboardItemComponent } from './presentation/shared';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent
],
})
export class AppComponent {}
