import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TaskEntity } from "./task.entity"
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
  constructor(@InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>) {}

  async getAll() {
    return this.taskRepository.find()
  }

  async create(dto: CreateTaskDto) {
    const post = this.taskRepository.create(dto)
    return this.taskRepository.save(post)
  }

  async getById(id: string) {
    return this.taskRepository.findOne({
      where: {
        id: Number(id)
      }
    })
  }

  async updateById(id: string, dto: UpdateTaskDto) {
    const task = await this.getById(id)
    task.title = dto.title
    task.description = dto.description
    task.status = dto.status
    task.completed_at = new Date(dto.completed_at)

    return this.taskRepository.save(task)
  }

  async deleteById(id: string) {
    return this.taskRepository.delete({
      id: Number(id)
    })
  }
}
