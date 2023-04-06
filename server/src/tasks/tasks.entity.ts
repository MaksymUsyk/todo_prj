import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Task' })
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'timestamptz' })
  completed_at: Date;
}
