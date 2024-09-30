import { NextFunction, Request, Response } from 'express';
import { DepartmentUseCases } from '../use-cases';

export class DepartmentController {
  departmentUseCases: DepartmentUseCases;

  constructor(departmentUseCases: DepartmentUseCases) {
    this.departmentUseCases = departmentUseCases;
  }

  getAllDepartments = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const departments = await this.departmentUseCases.getAllDepartments();

      res.json(departments);
    } catch (error) {
      next(error);
    }
  };
}
