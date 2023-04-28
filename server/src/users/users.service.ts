import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'

export type User = any

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme'
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess'
    },
    {
      userId: 3,
      username: 'Shemar63',
      password: 'password'
    }
  ]

  async findOne(login: string): Promise<User | undefined> {
    // return this.users.find((user) => user.username === username);
    return this.userRepository.findOne({
      where: {
        login
      }
    })
  }

  async createUser(dto: CreateUserDto) {
    const user = this.userRepository.create(dto)
    return this.userRepository.save(user)
  }
}
