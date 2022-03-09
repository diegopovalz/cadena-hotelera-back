import { Schema } from 'mongoose';

interface Hotel {
  _id: number;
  hotelName: string;
  place: string;
  costPerRoom: number;
  roomsAvailable: number;
  roomImgUrl: string;
}

const schema = new Schema<Hotel>({
  _id: { type: Number, required: true },
  hotelName: { type: String, required: true },
  place: { type: String, required: true },
  costPerRoom: { type: Number, required: true },
  roomsAvailable: { type: Number, required: true },
});

schema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export { Hotel, schema };
