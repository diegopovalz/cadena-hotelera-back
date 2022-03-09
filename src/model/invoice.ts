import { Schema } from 'mongoose';

interface Invoice {
  hotelId: string;
  clientId: string;
  pricePaid: number;
}

const schema = new Schema<Invoice>({
  hotelId: { type: String, required: true },
  clientId: { type: String, required: true },
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
