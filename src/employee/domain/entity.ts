import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { Department } from '@/department/domain/entity';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  first_name: string;

  @Column({ type: 'text' })
  last_name: string;

  @Column({ type: 'datetime' })
  hire_date: Date;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @ManyToOne(() => Department)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;
}
