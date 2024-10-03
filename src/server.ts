import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { API_PORT } from '@/config/index';
import { departmentRouter } from './department/adapters/routes';
import { employeeRouter } from './employee/adapters/routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/department', departmentRouter);
app.use('/employee', employeeRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(
    '[ERROR]',
    err instanceof Error
      ? err.stack
      : JSON.stringify(err.message) || JSON.stringify(err)
  );
  res.status(500).json({ error: 'Something wrong happened' });
});

export async function initServer() {
  return new Promise<void>((resolve, reject) => {
    const server = app.listen(API_PORT, () => {
      console.log(`Server is listening on port: ${API_PORT}`);
      resolve();
    });

    server.on('error', (error) => reject(error));
  });
}
