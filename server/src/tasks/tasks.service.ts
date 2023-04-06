import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TasksEntity } from './tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly tasksRepository: Repository<TasksEntity>,
  ) {}

  async getAll() {
    return this.tasksRepository.find();
  }

  async create(dto: CreateTaskDto) {
    const post = this.tasksRepository.create(dto);
    return this.tasksRepository.save(post);
  }

  async getById(id: string) {
    return this.tasksRepository.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  async updateById(id: string, dto: UpdateTaskDto) {
    const task = await this.getById(id);
    task.title = dto.title;
    task.description = dto.description;
    task.status = dto.status;
    task.completed_at = new Date(dto.completed_at);

    return this.tasksRepository.save(task);
  }

  async deleteById(id: string) {
    return this.tasksRepository.delete({
      id: Number(id),
    });
  }
}
