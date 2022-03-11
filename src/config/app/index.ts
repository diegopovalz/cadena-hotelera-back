import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mountRoutes from '../../routes';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.CLIENT_URL_PROD
        : process.env.CLIENT_URL_DEV,
  })
);
app.use(express.json());

mountRoutes(app);

export default app;
