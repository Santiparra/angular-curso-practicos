import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggerService } from '../logger.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private loggerService = inject(LoggerService);
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(title: string, description: string) {
    const newTask: Task = {
      title,
      description,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggerService.log(`Task added: ${newTask.title}`);
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
    this.loggerService.log(`Task status updated: ${status}`);
  }
}
