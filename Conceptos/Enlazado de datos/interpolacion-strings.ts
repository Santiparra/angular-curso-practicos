//cualquier cosa que se pueda resolver a string se puede interpolar asi

//en el componente

export class ServerComponent {
    serverId = 10;
    serverStatus = "offline"

    getServerStatus () {
        return this.serverStatus
    }
}

//en el template

/* <p> {{"Server"}} con la id {{ serverId }} esta {{ serverStatus }} </p> 

aca {{ serverStatus }} puede ser tambien

{{ getServerStatus() }}

*/

