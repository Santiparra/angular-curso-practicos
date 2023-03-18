import { Component } from '@angular/core';


@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.css']
})
export class DetailsButtonComponent {

  showDetails = false;
  clicks = 0;
  counter: number[] = [];

  toggleDetalles() {
    this.showDetails = !this.showDetails;
    this.clicks++;
    this.counter.push(this.clicks)
  }
  
}
