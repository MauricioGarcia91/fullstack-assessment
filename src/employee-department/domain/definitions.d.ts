import { Employee } from '@/employee/domain/definitions.d';
import { Department } from '@/department/domain/definitions.d';

export interface EmployeeDepartment {
  id: string;
  employee: Employee;
  department: Department;
  created_at: Date;
}
