import { Employee } from './definitions.d';

export interface EmployeeRepository {
  getEmployeeById: (id: string) => Promise<Employee | null>;
  getAllEmployee: () => Promise<Employee[]>;
}
