import { Schema } from 'mongoose';

interface Reservation {
  _id: number;
  hotelId: number;
  clientId: number;
  dateReserved: string;
}

const schema = new Schema<Reservation>({
  _id: { type: Number, required: true },
  hotelId: { type: Number, required: true },
  clientId: { type: Number, required: true },
  dateReserved: { type: String, required: true },
});

schema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export { Reservation, schema };
