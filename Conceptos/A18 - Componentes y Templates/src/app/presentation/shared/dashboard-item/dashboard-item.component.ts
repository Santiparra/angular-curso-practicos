import { Component, input } from '@angular/core';

import { DashboardIconImage } from '../../../domain/models';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  image = input.required<DashboardIconImage>();
  title = input.required<string>();
}
