import { Employee } from './definitions.d';

export interface EmployeeRepository {
  getEmployeeById: (id: string) => Promise<Employee | null>;
  getAllEmployees: () => Promise<Employee[]>;
  createEmployee: (
    employee: Omit<Employee, 'id|is_active|created_at'>
  ) => Promise<Employee>;
  updateEmployee: (employee: Employee) => Promise<void>;
  deleteEmployee: (id: string) => Promise<void>;
}
