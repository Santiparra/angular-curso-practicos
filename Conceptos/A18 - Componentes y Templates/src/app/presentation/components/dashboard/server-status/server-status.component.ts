import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown');
  private destroyRef = inject(DestroyRef);
  //private interval?: NodeJS.Timeout;

  ngOnInit(): void {
    const interval = setInterval(() => {
      const randomStatus = Math.random();
      if (randomStatus < 0.5) {
        this.currentStatus.set('online');
      } else if (randomStatus < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 7000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  // remember to implement OnDestroy interface
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}

// Signal Effects Cleanup Functions

// When working with Signal effects, you sometimes might need to perform some cleanup work before the effect function runs again (e.g., to clear some timer or something like that).

// Angular's effect() allows you to do that!

// It does provide you with an onCleanup hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time:

//     effect((onCleanup) => {
//       const tasks = getTasks();
//       const timer = setTimeout(() => {
//         console.log(`Current number of tasks: ${tasks().length}`);
//       }, 1000);
//       onCleanup(() => {
//         clearTimeout(timer);
//       });
//     });