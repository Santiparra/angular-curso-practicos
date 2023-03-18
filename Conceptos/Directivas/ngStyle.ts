//ejemplo en el componente server
[ngStyle]="{backgroundColor: getColor()}"

/* ngIf is a Structural directive means it can either add the element to 
the DOM or remove it but ngStyle is a decorator directive means it will 
modify the element visually but doesn't remove it or add it to the DOM, 
so structural directives should be used with * and the decorator 
directive should be used with []. */