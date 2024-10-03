import { Employee, EmployeeInputData } from './definitions.d';

export interface EmployeeRepository {
  getEmployeeById: (id: string) => Promise<Employee | null>;
  getAllEmployees: () => Promise<Employee[]>;
  createEmployee: (
    employee: Omit<Employee, 'id|created_at'>
  ) => Promise<Employee>;
  updateEmployee: (
    id: string,
    employee: Partial<EmployeeInputData>
  ) => Promise<Employee | null>;
  deleteEmployee: (id: string) => Promise<Employee | null>;
}
