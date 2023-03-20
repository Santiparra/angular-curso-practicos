// solo en el html

/* 
accedemos con el # 

*/

/* <input 
      type="text" 
      class="form-control" 
      #serverNameInput>


<button
    class="btn btn-primary"
    (click)="onAddServer(serverNameInput)">Add Server</button>
    <button


    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
          serverName: nameInput.value
          serverContent: this.newServerContent
        })
      }
  */   