import { Schema } from 'mongoose';

interface Client {
  documentType: string;
  documentNumber: string;
  name: string;
  lastName: string;
  username: string;
}

const schema = new Schema<Client>({
  documentType: { type: String, required: true },
  documentNumber: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String },
});

schema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export { Client, schema };
