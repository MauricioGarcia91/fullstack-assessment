import { Router } from 'express';

import { DepartmentController } from './controller';
import { departmentUseCases } from './container-di';

const deparmentController = new DepartmentController(departmentUseCases);

export const departmentRouter = Router();

departmentRouter.get('/', deparmentController.getAllDepartments);
