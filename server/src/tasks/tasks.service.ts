import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TaskEntity } from './task.entity'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly tasksRepository: Repository<TaskEntity>
  ) {}

  async getAll() {
    return this.tasksRepository.find()
  }

  async create(dto: CreateTaskDto) {
    const task = this.tasksRepository.create(dto)
    return this.tasksRepository.save(task)
  }

  async getById(id: string) {
    return this.tasksRepository.findOne({
      where: {
        id: Number(id)
      }
    })
  }

  async updateById(id: string, dto: UpdateTaskDto) {
    const task = await this.getById(id)
    task.title = dto.title
    task.description = dto.description
    task.isDone = dto.isDone
    // task.completed_at = new Date(dto.completed_at);

    return this.tasksRepository.save(task)
  }

  async deleteById(id: string) {
    return this.tasksRepository.delete({
      id: Number(id)
    })
  }
}
