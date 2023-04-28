import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity({ name: 'Task' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  title: string

  @Column({ type: 'text' })
  description: string

  @Column({ type: 'boolean', default: false })
  isDone: boolean

  @CreateDateColumn()
  created_at: Date

  @Column({ type: 'timestamptz', default: null })
  completed_at: Date
}
