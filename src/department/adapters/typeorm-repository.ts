import { Repository } from 'typeorm';
import { DepartmentRepository } from '../domain/repository';
import { Department } from '../domain/entity';

export class DepartmentTypeOrmRepository implements DepartmentRepository {
  repository: Repository<Department>;

  constructor(repository: Repository<Department>) {
    this.repository = repository;
  }

  getAllDepartment = async () => {
    try {
      return await this.repository.find();
    } catch (error) {
      throw `[DEPARTMENT-REPOSITORY] [getAllDepartment] ${error}`;
    }
  };

  getDepartmentById = async (id: string) => {
    try {
      return await this.repository.findOneBy({
        id
      });
    } catch (error) {
      throw `[DEPARTMENT-REPOSITORY] [getDepartmentById] ${error}`;
    }
  };
}
