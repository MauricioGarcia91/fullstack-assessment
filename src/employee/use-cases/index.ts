import { EmployeeRepository } from '../domain/repository';
import { DepartmentUseCases } from '@/department/use-cases';
import { Employee } from '../domain/entity';

import { EmployeeInputData } from '../domain/definitions.d';
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
    const { department_id: departmentId, ...employee } = employeeInputData;

    if (departmentId) {
      const department = await this.departmentUseCases.getDepartmentById(
        departmentId
      );

      if (!department) {
        return null;
      }

      Object.assign(employee, { department });
    }

    return await this.employeeRepository.updateEmployee(id, employee);
  };

  deleteEmployee = async (id: string) => {
    return await this.employeeRepository.deleteEmployee(id);
  };
}
