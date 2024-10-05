import { EmployeeDepartment } from '@/employee-department/domain/entity';
import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;
}
