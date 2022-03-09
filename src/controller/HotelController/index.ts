import { Request, Response } from 'express';
import HotelService from '../../service/HotelService';

async function getHotels(req: Request, res: Response) {
  const { location } = req.body;
  const hotels = await HotelService.getHotels(location);
  return res.json({ hotels });
}

async function getHotelById(req: Request, res: Response) {
  const { id } = req.params;
  const hotel = await HotelService.getHotelById(+id);
  return res.json({ hotel });
}

export default {
  getHotels,
  getHotelById,
};
