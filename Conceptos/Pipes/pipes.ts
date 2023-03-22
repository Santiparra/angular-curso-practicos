//Referencias: https://angular.io/api?query=pipe
/* 

solo cambian el output, no el objeto

{{ server.started | date:"fullDate" }}

para multiples parametros separamos con :

{{ server.started | date:"fullDate" | uppercase }}

esto para concatenar multiples, el orden importa izquierda a derecha

 */

/* 
PIPES PERSONALIZADOS

van en las declaraciones de appmodule,
clase que implementa PipeTransform 
decorador pipe con el nombre a llamar
@Pipe({
    name: "shorten"
})

OJO CON LA PROPIEDAD PURE PUEDE CONSUMIR MUCHO RSS
 */