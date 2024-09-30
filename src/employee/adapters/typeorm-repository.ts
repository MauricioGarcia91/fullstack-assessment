import { Repository } from 'typeorm';
import { EmployeeRepository } from '../domain/repository';
import { Employee } from '../domain/entity';
import { EmployeeInputData } from '../domain/definitions';

export class EmployeeTypeOrmRepository implements EmployeeRepository {
  employeeRepository: Repository<Employee>;

  constructor(employeeRepository: Repository<Employee>) {
    this.employeeRepository = employeeRepository;
  }

  getEmployeeById = async (id: string) => {
    try {
      return await this.employeeRepository.findOne({
        where: { id },
        relations: {
          department: true
        }
      });
    } catch (error) {
      throw `[EMPLOYEE-REPOSITORY] [getEmployeeById] ${error}`;
    }
  };

  getAllEmployee = async () => {
    try {
      return await this.employeeRepository.find({
        relations: {
          department: true
        }
      });
    } catch (error) {
      throw `[EMPLOYEE-REPOSITORY] [getAllEmployee] ${error}`;
    }
  };

  createEmployee = async (employee: EmployeeInputData) => {
    try {
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw `[EMPLOYEE-REPOSITORY] [createEmployee] ${error}`;
    }
  };
}
