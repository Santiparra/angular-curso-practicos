//Importante: para habilitar ngModel se requiere importar FormsModule!

// en el template

/* 
    <label> Nombre del servidor</label>
    <input
        type="text"
        class="form-control"
        [(ngModel)]="serverName">
    
    <p> {{ serverName }} </p>

*/

//En el componente    
export class ServersComponent {
    serverName = "";

    constructor () {   
    }
    
 }