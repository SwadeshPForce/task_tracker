import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDto } from './dtos/task.decorator';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTask() {
    return this.appService.getAllTasks();
  }

  @Post('/create')
  addNewTask(@Body() reqBody: CreateTaskDto) {
    return this.appService.addNewTask(reqBody);
  }

  @Patch('/update/:id')
  editTask(@Param('id') id: string, @Body() reqBody: CreateTaskDto) {
    return this.appService.editTask({ ...reqBody, _id: id });
  }

  @Delete('/delete/:id')
  deleteTask(@Param('id') id: string) {
    return this.appService.deleteTask(id);
  }
}
