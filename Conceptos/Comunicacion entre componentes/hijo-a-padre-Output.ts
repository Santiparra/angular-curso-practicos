
// hijo template 

//Referencias: https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

/* 

<button *ngIf="!estaEnCarro" (click)="agregarAlCarro()">Añadir al carrito</button>
<button *ngIf="estaEnCarro" (click)="quitarDelCarro()">Quitar del carrito</button> 
    
*/

//hijo component

/* 

@Output() emitLibro = new EventEmitter<Libro>():

agregarAlCarro() {
     this.emitLibro.emit(this.libro) 
  }

*/


//padre component

/* 

carrito: Libro[] = []

tomar del event emitter del hijo
el libro que recibe es el evento
   agregarAlCarro(libro: Libro) {
    console.log(libro)
  } 

 */

//padre template - para escuchar evento

/* 

<ul *ngIf="esVisible">
    <ng-container *ngFor="let cadaLibro of libros">
        <app-libro 
        (emitLibro)="agregarAlCarro($event)"
        [libro]="cadaLibro"></app-libro>
    </ng-container>
</ul>

*/