import { Schema } from 'mongoose';

interface Invoice {
  hotelId: number;
  clientId: number;
  pricePaid: number;
}

const schema = new Schema<Invoice>({
  hotelId: { type: Number, required: true },
  clientId: { type: Number, required: true },
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
