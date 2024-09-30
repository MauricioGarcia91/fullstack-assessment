import { EmployeeRepository } from '../domain/repository';
import { EmployeeInputData } from '../domain/definitions.d';

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

  createEmployee = async (employeeInputData: EmployeeInputData) => {
    const employee = await this.employeeRepository.createEmployee(
      employeeInputData
    );

    return await this.employeeRepository.getEmployeeById(employee.id);
  };

  updateEmployee = async (id: string, employeeInputData: EmployeeInputData) => {
    return await this.employeeRepository.updateEmployee(id, employeeInputData);
  };

  deleteEmployee = async (id: string) => {
    return await this.employeeRepository.deleteEmployee(id);
  };
}
