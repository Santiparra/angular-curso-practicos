import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input("srvElement") element: {type: string, name: string, content: string};

  constructor( ) { 
    console.log("llamado constructor") }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("llamado al cambiar")
    console.log(changes)
  }  

  ngOnInit() {
    console.log("llamado on init")
  }

}
