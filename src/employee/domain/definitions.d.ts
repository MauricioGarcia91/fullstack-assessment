import { Department } from '@/department/domain/definitions.d';

export interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  hire_date: Date;
  department: Department;
  phone: string;
  address: string;
}
