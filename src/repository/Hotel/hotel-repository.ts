import { model } from 'mongoose';
import { Hotel, schema } from '../../model/Hotel/hotel';

const HotelRepository = model<Hotel>('Hotel', schema, 'hotels');

export { HotelRepository };
