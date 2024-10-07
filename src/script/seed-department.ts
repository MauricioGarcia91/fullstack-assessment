import { AppDataSource } from '../data-source';
import { Department } from '@/department/domain/entity';

export const seedDepartments = async () => {
  const departmentRepository = AppDataSource.getRepository(Department);

  const count = await departmentRepository.count();
  if (count === 0) {
    const departments = [
      { name: 'IT', description: 'Information Technology Department' },
      { name: 'HR', description: 'Human Resources Department' },
      { name: 'Finance', description: 'Finance Department' }
    ];

    await departmentRepository.save(departments);
  }
};
