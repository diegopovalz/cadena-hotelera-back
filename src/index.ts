import 'dotenv/config';
import { connect, disconnect } from './config/db';
import app from './config/app';

const main = async () => {
  const PORT = process.env.PORT || 3001;

  try {
    await connect();
    console.log(`[mongo] database connected`);
  } catch (err: any) {
    console.error('[mongo error]', err);
  }

  app.listen(PORT, () => {
    console.log(`[server] server is running on Port ${PORT}`);
  });

  process.on('uncaughtException', async (error: Error) => {
    await disconnect();
    console.error('[uncaught error]', error);
  });
};

main();
