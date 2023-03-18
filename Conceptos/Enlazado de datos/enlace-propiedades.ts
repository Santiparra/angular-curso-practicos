// en el template

/* <button [disabled]="!allowNewServer"> 
        Agregar servidor 
    </button> 

    <p [innerText]="allowNewServer"> </p>
*/

//En el componente    
export class ServersComponent {
   allowNewServer = false

   constructor () {
    setTimeout (() => {
        this.allowNewServer = true
    }, 2000)
   }
}