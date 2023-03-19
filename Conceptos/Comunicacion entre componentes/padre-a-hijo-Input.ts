//padre template

//Referencias: https://angular.io/guide/inputs-outputs#sending-data-to-a-child-component

/* 
<ul *ngIf="esVisible">
    <ng-container *ngFor="let cadaLibro of libros">
        <app-libro [libro]="cadaLibro"></app-libro>
    </ng-container>
</ul> 
*/

//hijo component

//el as libro aca es para que podamos inicializarlo vacio

/* 
@Input() libro: Libro = {} as Libro 
*/