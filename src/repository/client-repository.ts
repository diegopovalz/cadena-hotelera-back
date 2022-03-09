import { model } from 'mongoose';
import { Client, schema } from '../model/client';

const ClientRepository = model<Client>('Client', schema);

export { ClientRepository };
