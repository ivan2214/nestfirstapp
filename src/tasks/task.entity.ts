


export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
