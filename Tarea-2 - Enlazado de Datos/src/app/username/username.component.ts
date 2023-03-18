import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  username = ""
  enableReset = false

  resetUsername() {
    this.username = ""
  }

  enabledReset() {
    this.enableReset = false
    if (this.username === "") this.enableReset = true    
  }

}
