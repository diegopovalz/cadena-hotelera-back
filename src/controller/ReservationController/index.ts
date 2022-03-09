import { Request, Response } from 'express';
import ReservationService from 'service/ReservationService';
import ClientService from 'service/ClientService';
import InvoiceService from 'service/InvoiceService';
import HotelService from 'service/HotelService';

async function createReservation(req: Request, res: Response) {
  const { reservation } = req.body;
  const { clientInfo } = reservation;

  const clientExists = await ClientService.clientExists(
    clientInfo.documentType,
    clientInfo.documentNumber
  );

  let client: any = {};

  if (!clientExists) {
    client = await ClientService.createClient(clientInfo);
  } else {
    client = await ClientService.getClient(
      clientInfo.documentType,
      clientInfo.documentNumber
    );
  }

  reservation.clientId = client._id;
  delete reservation.clientInfo;

  const savedReservation = await ReservationService.createReservation(
    reservation
  );

  const hotel = await HotelService.getHotelById(savedReservation.hotelId);
  const invoice: any = {
    reservationId: savedReservation._id,
    pricePaid: hotel?.costPerRoom,
  };

  const savedInvoice = await InvoiceService.createInvoice(invoice);

  return res.status(201).json({ savedReservation, invoice: savedInvoice._id });
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
