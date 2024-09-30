import { Employee, EmployeeInputData } from './definitions.d';

export interface EmployeeRepository {
  getEmployeeById: (id: string) => Promise<Employee | null>;
  getAllEmployee: () => Promise<Employee[]>;
  createEmployee: (employee: EmployeeInputData) => Promise<Employee>;
  updateEmployee: (
    id: string,
    employee: Partial<EmployeeInputData>
  ) => Promise<Employee | null>;
  deleteEmployee: (id: string) => Promise<Employee | null>;
}
