import { Reservation } from 'model/Reservation/reservation';
import { ReservationRepository as ReservationModel } from 'repository/Reservation/reservation-repository';

async function createReservation(reservation: Reservation) {
  const lastInsert = await ReservationModel.findOne()
    .select('_id')
    .sort({ _id: -1 })
    .exec();

  reservation._id = lastInsert ? +lastInsert._id + 1 : 1;

  const savedReservation = new ReservationModel(reservation);
  const result = await savedReservation.save();
  return result;
}

async function getReservations(clientId: number) {
  const reservations = await ReservationModel.find({
    clientId: clientId,
  }).exec();

  return reservations;
}

async function getReservation(id: string) {
  const reservation = await ReservationModel.findById(+id).exec();
  return reservation;
}

export default {
  createReservation,
  getReservations,
  getReservation,
};
