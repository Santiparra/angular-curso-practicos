// en los templates solo agregar en los inputs que queremos bindear
/* 

ngModel
name="usuario"

Siempre recordar importar el formsmodule

*/
//en el template
/* 

ngForm aca es el form que genera automaticamente angular

<form (ngSubmit)="submit()" #miForm="ngForm" class="p-4 rounded-lg border m-auto">

luego en submit podriamos pasar miform o usar viewchild en el componente

//en el componente



 */