import { model } from 'mongoose';
import { Reservation, schema } from '../../model/Reservation/reservation';

const ReservationRepository = model<Reservation>(
  'Reservation',
  schema,
  'reservations'
);

export { ReservationRepository };
