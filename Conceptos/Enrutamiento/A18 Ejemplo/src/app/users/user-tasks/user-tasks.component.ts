import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
}) //implements OnInit
export class UserTasksComponent {
  userName = input.required<string>();
  message = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);

  // ngOnInit(): void {
  //   const subscription = this.activatedRoute.data.subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //   });

  //Add on destroy
  //}
  //constructor(private usersService: UsersService) {}

  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  //userName = '';

  // ngOnInit(): void {
  //   console.log('Input data' + this.message);
  //   console.log(this.activatedRoute.snapshot);
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {

  //     },
  //   });
  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }

  // userId = input.required<string>();

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
};
