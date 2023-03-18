// en el template

/* 
    <label> Nombre del servidor</label>
    <input
        type="text"
        class="form-control"
        (input)="onUpdateServerName($event)">
    
    <p> {{ serverName }} </p>
    
*/

//En el componente    
export class ServersComponent {
    serverName = "";

    constructor () {
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value
    }
 }