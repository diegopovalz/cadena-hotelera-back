import { Request, Response } from 'express';
import ReservationService from '../../service/ReservationService';
import ClientService from '../../service/ClientService';
import InvoiceService from '../../service/InvoiceService';
import HotelService from '../../service/HotelService';

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

  return res.status(201).json({ savedReservation, invoice: savedInvoice });
}

async function getReservations(req: Request, res: Response) {
  const { clientId } = req.body;
  const results = await ReservationService.getReservations(+clientId);
  const reservations = [];
  for (const result of results) {
    const { hotelId } = result;
    const hotelInfo = await HotelService.getHotelById(hotelId);
    reservations.push({ reservation: result, hotelInfo });
  }
  return res.json(reservations);
}

async function getReservation(req: Request, res: Response) {
  const { id } = req.params;
  const reservation = await ReservationService.getReservation(id);
  if (!reservation) {
    return res.json({ error: 'Reservation not found' });
  }
  const hotelId = reservation.hotelId;
  const hotelInfo = await HotelService.getHotelById(hotelId);
  return res.json({ reservation, hotelInfo });
}

export default {
  createReservation,
  getReservations,
  getReservation,
};
