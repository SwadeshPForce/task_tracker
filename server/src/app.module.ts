import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://swadesh27:Swadesh123@cluster0.xyidfux.mongodb.net/task_tracker?retryWrites=true&w=majority&appName=Cluster0',
    ),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
