import { NextFunction, Request, Response } from 'express';
import { EmployeeUseCases } from '../use-cases';

export class EmployeeController {
  employeeUseCases: EmployeeUseCases;

  constructor(employeeUseCases: EmployeeUseCases) {
    this.employeeUseCases = employeeUseCases;
  }

  getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employeeId = req.params.id;

      const employee = await this.employeeUseCases.getEmployeeById(employeeId);

      res.json(employee);
    } catch (error) {
      next(error);
    }
  };

  getAllEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employees = await this.employeeUseCases.getAllEmployee();

      res.json(employees);
    } catch (error) {
      next(error);
    }
  };
}
