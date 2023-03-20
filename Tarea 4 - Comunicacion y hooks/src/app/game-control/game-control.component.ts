import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {


  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  ultimoNumero = 0;

  onStart() {
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.ultimoNumero + 1);
      this.ultimoNumero++
    },1000)
  }

  onPause() {
    clearInterval(this.interval);
  }

}
