import { Schema } from 'mongoose';

interface Invoice {
  _id: number;
  reservationId: number;
  pricePaid: number;
}

const schema = new Schema<Invoice>({
  _id: { type: Number, required: true },
  reservationId: { type: Number, required: true },
  pricePaid: { type: Number, required: true },
});

schema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export { Invoice, schema };
