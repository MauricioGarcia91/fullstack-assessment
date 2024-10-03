import { EmployeeRepository } from '../domain/repository';
import { EmployeeInputData } from '../domain/definitions.d';
import { DepartmentUseCases } from '@/department/use-cases';
import { Employee } from '../domain/entity';

export class EmployeeUseCases {
  employeeRepository: EmployeeRepository;
  departmentUseCases: DepartmentUseCases;

  constructor(
    employeeRepository: EmployeeRepository,
    departmentUseCases: DepartmentUseCases
  ) {
    this.employeeRepository = employeeRepository;
    this.departmentUseCases = departmentUseCases;
  }

  getEmployeeById = async (id: string) => {
    return await this.employeeRepository.getEmployeeById(id);
  };

  getAllEmployees = async () => {
    return await this.employeeRepository.getAllEmployees();
  };

  createEmployee = async (employeeInputData: EmployeeInputData) => {
    const department = await this.departmentUseCases.getDepartmentById(
      employeeInputData.department_id
    );

    if (!department) {
      return null;
    }

    const { department_id: departmentId, ...newEmployee } = employeeInputData;

    const employee = await this.employeeRepository.createEmployee({
      ...newEmployee,
      department
    } as Employee);

    return await this.employeeRepository.getEmployeeById(employee.id);
  };

  updateEmployee = async (id: string, employeeInputData: EmployeeInputData) => {
    return await this.employeeRepository.updateEmployee(id, employeeInputData);
  };

  deleteEmployee = async (id: string) => {
    return await this.employeeRepository.deleteEmployee(id);
  };
}
