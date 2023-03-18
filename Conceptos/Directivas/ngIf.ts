// en el template

/* 

<p *ngIf="serverCreated" else noServer>Server was created, server name is {{ serverName }}</p>

<ng-template #noServer>
    <p> NO Server was created</p>
</ng-template>

 */


//en el componente

export class ServerComponent {
    serverCreated = false;

    onCreateServer() {
        this.serverCreated = true;
      }
  }