import { model } from 'mongoose';
import { Reservation, schema } from '../model/reservation';

const ReservationRepository = model<Reservation>(
  'Reservation',
  schema,
  'reservations'
);

export { ReservationRepository };
