import { Router } from 'express';
import { EmployeeController } from './controller';

import { Validator } from '@/shared/validator';
import { employeeSchema } from './schema';

import { employeeUseCases } from './container-di';

const validator = new Validator(employeeSchema);

const employeeController = new EmployeeController(employeeUseCases, validator);

export const employeeRouter = Router();

employeeRouter.get('/:id', employeeController.getEmployeeById);
employeeRouter.get('/', employeeController.getAllEmployees);

employeeRouter.post('/', employeeController.createEmployee);
employeeRouter.put('/:id', employeeController.updateEmployee);
employeeRouter.delete('/:id', employeeController.deleteEmployee);
