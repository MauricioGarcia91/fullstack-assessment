import { Router } from 'express';
import { AppDataSource } from '@/data-source';
import { Employee } from '../domain/entity';
import { EmployeeTypeOrmRepository } from './typeorm-repository';
import { EmployeeUseCases } from '../use-cases';
import { EmployeeController } from './controller';

const typeOrmRepository = AppDataSource.getRepository(Employee);
const employeeRepository = new EmployeeTypeOrmRepository(typeOrmRepository);
const employeeUseCases = new EmployeeUseCases(employeeRepository);
const employeeController = new EmployeeController(employeeUseCases);

export const employeeRouter = Router();

employeeRouter.get('/:id', employeeController.getEmployeeById);
