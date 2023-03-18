//Importante: para habilitar ngModel se requiere importar FormsModule!

// en el template

/* 
    <label> Nombre del servidor</label>
    <input
        type="text"
        class="form-control"
        [(ngModel)]="serverName">
    
    <p> {{ serverCreationStatus }} </p>

*/

//En el componente    
export class ServersComponent {
    serverName = "";
    serverCreationStatus = "No se creo ningun servidor"

    constructor () {   
    }
    
    onCreateServer () {
        this.serverCreationStatus = `se creo un servidor llamado` + this.serverName 
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value
    }
 }