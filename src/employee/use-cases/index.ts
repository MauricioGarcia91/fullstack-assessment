import { EmployeeRepository } from '../domain/repository';

export class EmployeeUseCases {
  employeeRepository: EmployeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  getEmployeeById = async (id: string) => {
    return await this.employeeRepository.getEmployeeById(id);
  };

  getAllEmployee = async () => {
    return await this.employeeRepository.getAllEmployee();
  };
}
