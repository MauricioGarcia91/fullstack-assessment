import { Router } from 'express';
import { AppDataSource } from '@/data-source';
import { Employee } from '../domain/entity';
import { EmployeeTypeOrmRepository } from './typeorm-repository';
import { EmployeeUseCases } from '../use-cases';
import { EmployeeController } from './controller';
import { Validator } from '@/shared/validator';
import { employeeSchema } from './schema';

const typeOrmRepository = AppDataSource.getRepository(Employee);
const employeeRepository = new EmployeeTypeOrmRepository(typeOrmRepository);
const employeeUseCases = new EmployeeUseCases(employeeRepository);

const validator = new Validator(employeeSchema);

const employeeController = new EmployeeController(employeeUseCases, validator);

export const employeeRouter = Router();

employeeRouter.get('/:id', employeeController.getEmployeeById);
employeeRouter.get('/', employeeController.getAllEmployee);

employeeRouter.post('/', employeeController.createEmployee);
employeeRouter.put('/:id', employeeController.updateEmployee);
