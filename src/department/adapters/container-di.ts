import { AppDataSource } from '@/data-source';

import { DepartmentTypeOrmRepository } from './typeorm-repository';
import { Department } from '../domain/entity';
import { DepartmentUseCases } from '../use-cases';

const typeOrmRepository = AppDataSource.getRepository(Department);
const departmentRepository = new DepartmentTypeOrmRepository(typeOrmRepository);

export const departmentUseCases = new DepartmentUseCases(departmentRepository);
