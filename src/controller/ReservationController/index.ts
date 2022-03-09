import { Request, Response } from 'express';
import ReservationService from 'service/ReservationService';

async function createReservation(req: Request, res: Response) {
  const { reservation } = req.body;
  const savedReservation = await ReservationService.createReservation(
    reservation
  );
  return res.status(201).json(savedReservation);
}

async function getReservations(req: Request, res: Response) {
  const { clientId } = req.body;
  const reservations = await ReservationService.getReservations(+clientId);
  return res.json(reservations);
}

async function getReservation(req: Request, res: Response) {
  const { id } = req.params;
  const reservation = await ReservationService.getReservation(id);
  return res.json(reservation);
}

export default {
  createReservation,
  getReservations,
  getReservation,
};
