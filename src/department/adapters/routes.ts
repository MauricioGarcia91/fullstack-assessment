import { Router } from 'express';
import { AppDataSource } from '@/data-source';

import { DepartmentTypeOrmRepository } from './typeorm-repository';
import { Department } from '../domain/entity';
import { DepartmentUseCases } from '../use-cases';
import { DepartmentController } from './controller';

const typeOrmRepository = AppDataSource.getRepository(Department);
const departmentRepository = new DepartmentTypeOrmRepository(typeOrmRepository);
const departmentUseCases = new DepartmentUseCases(departmentRepository);
const deparmentController = new DepartmentController(departmentUseCases);

export const departmentRouter = Router();

departmentRouter.get('/', deparmentController.getAllDepartments);
