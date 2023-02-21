import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { TaskService } from "./task.service";

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async register(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto)
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.taskService.getById(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.updateById(id, dto)
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.taskService.deleteById(id)
  }
}
