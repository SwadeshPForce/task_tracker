import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class UpdateTaskDto extends CreateTaskDto {
  @IsNotEmpty()
  _id: string;
}
