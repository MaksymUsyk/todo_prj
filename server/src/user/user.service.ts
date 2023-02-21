import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity"
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

export type User = any

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async getByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }


  async getAll() {
    return this.userRepository.find()
  }

  async create(dto: CreateUserDto) {
    const user = this.userRepository.create(dto)
    return this.userRepository.save(user)
  }

  async getById(id: string) {
    return this.userRepository.findOne({
      where: {
        id: Number(id)
      }
    })
  }

  async updateById(id: string, dto: UpdateUserDto) {
    const user = await this.getById(id)
    user.username = dto.username
    user.password = dto.password

    return this.userRepository.save(user)
  }

  async deleteById(id: string) {
    return this.userRepository.delete({
      id: Number(id)
    })
  }
}
