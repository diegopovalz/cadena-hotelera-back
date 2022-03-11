import { Express } from 'express';
import hotelRoutes from '../routes/Hotel';
import reservationRoutes from '../routes/Reservation';
import loginRoutes from '../routes/Login';

const routes = [hotelRoutes, reservationRoutes, loginRoutes];

export default function mountRoutes(app: Express) {
  routes.forEach(({ uri, uriRouter }) => {
    app.use(`/${uri}`, uriRouter);
  });
}
