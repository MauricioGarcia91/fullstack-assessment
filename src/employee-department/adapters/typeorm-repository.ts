import { Repository } from 'typeorm';
import { EmployeeDepartmentRepository } from '../domain/repository';
import { EmployeeDepartment } from '../domain/definitions.d';

export class EmployeeDepartmentTypeOrmRepository
  implements EmployeeDepartmentRepository
{
  employeeDepartmentRepository: Repository<EmployeeDepartment>;

  constructor(employeeDepartmentRepository: Repository<EmployeeDepartment>) {
    this.employeeDepartmentRepository = employeeDepartmentRepository;
  }

  createEmployeeDepartment = async (employeeDepartment: EmployeeDepartment) => {
    try {
      return await this.employeeDepartmentRepository.save(employeeDepartment);
    } catch (error) {
      throw `[EmployeeDepartment-REPOSITORY] [createEmployeeDepartment] ${error}`;
    }
  };
}
