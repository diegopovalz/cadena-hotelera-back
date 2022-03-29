import { HotelRepository } from '../../repository/Hotel/hotel-repository';

async function getHotels(location: string) {
  const hotels = await HotelRepository.find({
    place: { $regex: '.*' + location + '.*', $options: 'i' },
  })
    .gt('roomsAvailable', 0)
    .exec();
  return hotels;
}

async function getHotelById(id: number) {
  const hotel = await HotelRepository.findById(id).exec();
  return hotel;
}

async function removeRoomAvailabilityToHotel(
  id: number,
  newRoomsAvailable: number
) {
  await HotelRepository.findByIdAndUpdate(id, {
    roomsAvailable: newRoomsAvailable,
  });
}

export default {
  getHotels,
  getHotelById,
  removeRoomAvailabilityToHotel,
};
