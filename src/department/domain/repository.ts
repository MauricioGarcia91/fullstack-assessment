import { Department } from './definitions.d';

export interface DepartmentRepository {
  getAllDepartment: () => Promise<Department[]>;
}
