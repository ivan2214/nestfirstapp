import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  title: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  title: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  description: string;
  status: TaskStatus;
}
