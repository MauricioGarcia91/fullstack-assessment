import { EmployeeDepartmentRepository } from '../domain/repository';
import { EmployeeDepartment } from '../domain/definitions.d';

export class EmployeeDepartmentUseCases {
  employeeDepartmentRepository: EmployeeDepartmentRepository;

  constructor(employeeDepartmentRepository: EmployeeDepartmentRepository) {
    this.employeeDepartmentRepository = employeeDepartmentRepository;
  }

  create = async (employeeDepartment: EmployeeDepartment) => {
    return await this.employeeDepartmentRepository.createEmployeeDepartment(
      employeeDepartment
    );
  };
}
