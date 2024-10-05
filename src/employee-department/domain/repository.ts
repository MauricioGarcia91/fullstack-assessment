import { EmployeeDepartment } from './definitions.d';

export interface EmployeeDepartmentRepository {
  createEmployeeDepartment: (
    employeeDepartment: EmployeeDepartment
  ) => Promise<EmployeeDepartment>;
}
