import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mountRoutes from 'routes';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
  })
);
app.use(express.json());

mountRoutes(app);

export default app;
