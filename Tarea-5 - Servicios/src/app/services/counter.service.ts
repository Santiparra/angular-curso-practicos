import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    
    activeSwitched = 0;
    inactiveSwitched = 0;

    addedActive () {
        this.activeSwitched++
        console.log(this.activeSwitched)
    }

    addedInactive () {
        this.inactiveSwitched++;
        console.log(this.inactiveSwitched)
    }

}
