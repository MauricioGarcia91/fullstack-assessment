import { NextFunction, Request, Response } from 'express';
import { EmployeeUseCases } from '../use-cases';
import { Validator } from '@/shared/validator';
import { employeeSchema } from './schema';
import { EmployeeInputData } from '../domain/definitions.d';

export class EmployeeController {
  employeeUseCases: EmployeeUseCases;
  validator: Validator<(typeof employeeSchema)['shape']>;

  constructor(
    employeeUseCases: EmployeeUseCases,
    validator: Validator<(typeof employeeSchema)['shape']>
  ) {
    this.employeeUseCases = employeeUseCases;
    this.validator = validator;
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

  createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const input = req.body;
      const { data, error } = await this.validator.validateSchema(input);

      if (error) {
        res.status(400).json({ error });
        return;
      }

      const employee = await this.employeeUseCases.createEmployee(
        data as unknown as EmployeeInputData
      );

      res.status(201).json(employee);
    } catch (error) {
      next(error);
    }
  };

  updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const input = req.body;
      const employeeId = req.params.id;
      const { data, error } = await this.validator.validatePartialSchema(input);

      if (error) {
        res.status(400).json({ error });
        return;
      }

      const employee = await this.employeeUseCases.updateEmployee(
        employeeId,
        data as unknown as EmployeeInputData
      );

      res.status(201).json(employee);
    } catch (error) {
      next(error);
    }
  };

  deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const employeeId = req.params.id;

      const employee = await this.employeeUseCases.deleteEmployee(employeeId);

      res.json(employee);
    } catch (error) {
      next(error);
    }
  };
}
