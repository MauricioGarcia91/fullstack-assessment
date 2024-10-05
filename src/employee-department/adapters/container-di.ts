import { AppDataSource } from '@/data-source';

import { EmployeeDepartmentTypeOrmRepository } from './typeorm-repository';
import { EmployeeDepartment } from '../domain/entity';
import { EmployeeDepartmentUseCases } from '../use-cases';

const typeOrmRepository = AppDataSource.getRepository(EmployeeDepartment);
const employeeRepository = new EmployeeDepartmentTypeOrmRepository(
  typeOrmRepository
);

export const employeeDepartmentUseCases = new EmployeeDepartmentUseCases(
  employeeRepository
);
