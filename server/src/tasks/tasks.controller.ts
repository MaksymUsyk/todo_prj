import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('task')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  async create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Get()
  async findAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.taskService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.updateById(id, dto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.taskService.deleteById(id);
  }
}
