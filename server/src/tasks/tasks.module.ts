import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './tasks.entity';
import { TasksController } from './tasks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
