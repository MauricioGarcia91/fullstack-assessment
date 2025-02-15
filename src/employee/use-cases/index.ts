import { EmployeeRepository } from '../domain/repository';
import { DepartmentUseCases } from '@/department/use-cases';
import { Employee } from '../domain/entity';

import { EmployeeInputData } from '../domain/definitions.d';
import { EmployeeDepartmentUseCases } from '@/employee-department/use-cases';
import { EmployeeDepartment } from '@/employee-department/domain/definitions.d';

export class EmployeeUseCases {
  employeeRepository: EmployeeRepository;
  departmentUseCases: DepartmentUseCases;
  employeeDepartmentUseCases: EmployeeDepartmentUseCases;

  constructor(
    employeeRepository: EmployeeRepository,
    departmentUseCases: DepartmentUseCases,
    employeeDepartmentUseCases: EmployeeDepartmentUseCases
  ) {
    this.employeeRepository = employeeRepository;
    this.departmentUseCases = departmentUseCases;
    this.employeeDepartmentUseCases = employeeDepartmentUseCases;
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
      ...newEmployee
    } as Employee);

    await this.employeeDepartmentUseCases.create({
      employee,
      department,
      created_at: employee.hire_date
    } as EmployeeDepartment);

    return await this.employeeRepository.getEmployeeById(employee.id);
  };

  updateEmployee = async (id: string, employeeInputData: EmployeeInputData) => {
    const employeeToUpdate = await this.getEmployeeById(id);

    if (!employeeToUpdate) {
      return null;
    }

    const { department_id: departmentId, ...newEmployee } = employeeInputData;

    const promises: Promise<void | any>[] = [];

    promises.push(
      this.employeeRepository.updateEmployee({
        id: employeeToUpdate.id,
        ...newEmployee
      } as Employee)
    );

    if (departmentId) {
      const department = await this.departmentUseCases.getDepartmentById(
        departmentId
      );

      if (!department) {
        return null;
      }

      promises.push(
        this.employeeDepartmentUseCases.create({
          employee: employeeToUpdate,
          department,
          created_at: new Date()
        } as EmployeeDepartment)
      );
    }

    await Promise.all(promises);

    return await this.employeeRepository.getEmployeeById(employeeToUpdate.id);
  };

  deleteEmployee = async (id: string) => {
    const employee = await this.employeeRepository.getEmployeeById(id);

    if (!employee) {
      return null;
    }

    await this.employeeRepository.deleteEmployee(id);

    return employee;
  };
}
