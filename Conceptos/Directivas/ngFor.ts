//en el template

/* 

<input
  type="text"
  class="form-control"
  [(ngModel)]="serverName">

<button
  class="btn btn-primary"
  [disabled]="!allowNewServer"
  (click)="onCreateServer()">Add Server</button>

<app-server *ngFor="let server of servers"></app-server>

 */

//en el componente
export class ServersComponent  {
    serverName = 'Testserver';
    servers = ['Testserver', 'Testserver 2'];
  
    onCreateServer() {
      this.servers.push(this.serverName);
    }
  
  }


//ngFor con index

/* 
    <div
        
        *ngFor="let logItem of log; let i = index"
        [ngStyle]="{backgroundColor: i >= 4 ? 'blue' : 'transparent'}"
        [ngClass]="{'white-text': i >= 4}"
      >{{ logItem }}</div>
    </div> 
    
*/
  