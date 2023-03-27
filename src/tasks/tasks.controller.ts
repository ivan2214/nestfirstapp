import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private TasksService: TasksService) {}
  @Get()
  getAllTasks() {
    return this.TasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.TasksService.createTask(newTask.description, newTask.title);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateFieldsBody: UpdateTaskDto) {
    const { description, title, status } = updateFieldsBody;
    const updateFields = {
      description,
      title,
      status,
    };
    return this.TasksService.updateTask(id, updateFields);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.TasksService.deleteTask(id);
  }
}
