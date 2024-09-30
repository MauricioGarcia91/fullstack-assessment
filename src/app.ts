import { initDataSource } from './data-source';
import { initServer } from './server';

async function initApp() {
  try {
    await initDataSource();
    await initServer();
  } catch (error) {
    console.error(`[ERROR] App isn't initialized => ${error}`);
    process.exit(1);
  }
}

initApp();
