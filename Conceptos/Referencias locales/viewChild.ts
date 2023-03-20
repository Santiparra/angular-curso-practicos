/* template


<input 
type="text" 
class="form-control" 
#serverContentInput>


componente


@ViewChild("serverContentInput", {static: true}) serverContentInput: ElementRef;

onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }


*/