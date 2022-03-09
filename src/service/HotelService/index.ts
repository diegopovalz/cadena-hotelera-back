import { HotelRepository } from 'repository/hotel-repository';

async function getHotels(location: string) {
  const hotels = await HotelRepository.find({
    place: { $regex: '.*' + location + '.*', $options: 'i' },
  }).exec();
  return hotels;
}

async function getHotelById(id: string) {
  const hotel = await HotelRepository.findById(+id).exec();
  return hotel;
}

export default {
  getHotels,
  getHotelById,
};
