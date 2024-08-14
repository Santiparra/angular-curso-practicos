import { Component, DestroyRef, effect, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private destroyRef: DestroyRef) {
    // effect(() => {
    //   console.log(`clicked button ${this.clickCount()} times`);
    // });
    // toObservable(this.clickCount)
  }

  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
     const interval = setInterval(() => {
      //subscriber.error('Error');
      if (timesExecuted === 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new Value');
      subscriber.next({message: 'new Value'});
      timesExecuted++;
    }, 2000)
  });

  ngOnInit(): void {
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (value) => {
    //       console.log(value);
    //     },
    //     // complete: () => {
    //     //   console.log('complete');
    //     // },
    //     // error: (err) => {
    //     //   console.log(err);
    //     // }
    //   });
    const subscription = this.customInterval$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('completed!'),
      error: (err) => console.log(err),
    });
    const subscription2 = this.clickCount$.subscribe({
      next: (value) => {
        console.log(`clicked button ${this.clickCount()} times`);
      },
    });
    this.destroyRef.onDestroy(() => {
      //subscription.unsubscribe();
      subscription2.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
