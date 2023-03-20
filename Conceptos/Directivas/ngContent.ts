/* 

<ng-content></ng-content>

ej:  


en el padre:


<app-server-element 
      *ngFor="let serverElement of serverElements"
      [srvElement]="serverElement">
      
Esto es lo que pasaria a ngContent:
      <p>
        <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
        <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
      </p>   
      
      
</app-server-element>


en el hijo:

<ng-content></ng-content>

Este pone todo lo que tengas entre los tags del hijo 

*/