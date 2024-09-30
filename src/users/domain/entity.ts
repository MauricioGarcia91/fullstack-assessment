import { Department } from '@/department/domain/entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  first_name: string;

  @Column({ type: 'text' })
  last_name: string;

  @Column('datetime')
  hire_date: Date;

  @Column({ type: 'text' })
  photo: string;

  @Column({ type: 'text' })
  address: string;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;
}
