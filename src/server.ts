import express from 'express';
import { API_PORT } from '@/config/index';
import { departmentRouter } from './department/adapters/routes';

const app = express();

app.use('/departments', departmentRouter);

export async function initServer() {
  return new Promise<void>((resolve, reject) => {
    const server = app.listen(API_PORT, () => {
      console.log(`Server is listening on port: ${API_PORT}`);
      resolve();
    });

    server.on('error', (error) => reject(error));
  });
}
