import { Schema } from 'mongoose';

interface Client {
  _id: number;
  documentType: string;
  documentNumber: string;
  name: string;
  lastName: string;
  username: string;
}

const schema = new Schema<Client>({
  _id: { type: Number },
  documentType: { type: String },
  documentNumber: { type: String },
  name: { type: String },
  lastName: { type: String },
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
