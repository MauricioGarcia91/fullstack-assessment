import {
  ManyToOne,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

import { Department } from '@/department/domain/entity';
import { Employee } from '@/employee/domain/entity';

@Entity('employee_department')
export class EmployeeDepartment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ManyToOne(() => Department, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_at: Date;
}
