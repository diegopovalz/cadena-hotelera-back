import { Schema } from 'mongoose';

interface LoginInfo {
  username: string;
  password: string;
  role: string;
}

const schema = new Schema<LoginInfo>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

schema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export { LoginInfo, schema };
