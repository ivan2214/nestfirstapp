import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const newTask = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((t) => t.id === id);
  }

  updateTask(id: string, updateFiels: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    const taskUpdate = Object.assign(task, updateFiels);

    this.tasks = this.tasks.map((t) => (t.id == id ? taskUpdate : { ...t }));

    return taskUpdate;
  }

  deleteTask(id: string): Task[] {
    const tasksFilter = this.tasks.filter((t) => t.id !== id);
    this.tasks = tasksFilter;
    return this.tasks;
  }
}
