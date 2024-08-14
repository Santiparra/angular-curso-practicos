import { InjectionToken, Provider } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type taskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export const taskStatuses: taskStatusOptions = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In Progress',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Done',
  },
];

export const TASK_STATUSES = new InjectionToken<taskStatusOptions>(
  'task-status-options'
);

export const taskStatusesProvider: Provider = {
  provide: TASK_STATUSES,
  useValue: taskStatuses,
};
