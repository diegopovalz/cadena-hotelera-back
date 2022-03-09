import { model } from 'mongoose';
import { Client, schema } from '../../model/Client/client';

const ClientRepository = model<Client>('Client', schema, 'clients');

export { ClientRepository };
