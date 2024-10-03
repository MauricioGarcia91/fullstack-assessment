import { Department } from './definitions.d';

export interface DepartmentRepository {
  getAllDepartment: () => Promise<Department[]>;
  getDepartmentById: (id: string) => Promise<Department | null>;
}
