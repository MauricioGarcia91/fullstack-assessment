import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  DATABASE_HOST,
  DATABASE_LOCAL_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME
} from '@/config/index';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: DATABASE_HOST,
  port: Number(DATABASE_LOCAL_PORT),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [],
  synchronize: false,
  logging: false
});

export async function initDataSource() {
  return new Promise<void>((resolve, reject) => {
    AppDataSource.initialize()
      .then(() => {
        console.log('Datasource initialize');
        resolve();
      })
      .catch((error) => reject(error));
  });
}
