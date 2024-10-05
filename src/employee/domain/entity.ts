import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany
} from 'typeorm';

import { EmployeeDepartment } from '@/employee-department/domain/entity';

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

  @OneToMany(
    () => EmployeeDepartment,
    (employeeDepartment) => employeeDepartment.employee
  )
  departments: EmployeeDepartment[];

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;
}
