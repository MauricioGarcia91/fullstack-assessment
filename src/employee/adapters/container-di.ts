import { AppDataSource } from '@/data-source';

import { EmployeeTypeOrmRepository } from './typeorm-repository';
import { Employee } from '../domain/entity';
import { EmployeeUseCases } from '../use-cases';
import { departmentUseCases } from '@/department/adapters/container-di';
import { employeeDepartmentUseCases } from '@/employee-department/adapters/container-di';
const typeOrmRepository = AppDataSource.getRepository(Employee);
const employeeRepository = new EmployeeTypeOrmRepository(typeOrmRepository);

export const employeeUseCases = new EmployeeUseCases(
  employeeRepository,
  departmentUseCases,
  employeeDepartmentUseCases
);
