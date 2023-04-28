import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'User' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text', unique: true })
  login: string

  @Column({ type: 'text' })
  password: string
}
