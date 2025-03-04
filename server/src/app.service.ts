import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto, UpdateTaskDto } from './dtos/task.decorator';

@Injectable()
export class AppService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async addNewTask(task: CreateTaskDto) {
    return this.taskModel.create(task);
  }

  async editTask(task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(task._id, task);
  }

  async deleteTask(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
