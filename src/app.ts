import { initDataSource } from './data-source';
import { initServer } from './server';
import { seedDepartments } from './script/seed-department';

async function initApp() {
  try {
    await initDataSource();
    await initServer();
    await seedDepartments();
  } catch (error) {
    console.error(`[ERROR] App isn't initialized => ${error}`);
    process.exit(1);
  }
}

initApp();
