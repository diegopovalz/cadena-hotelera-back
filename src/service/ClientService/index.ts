import { Client } from 'model/Client/client';
import { ClientRepository as ClientModel } from 'repository/Client/client-repository';

async function createClient(client: Client) {
  const lastInsert = await ClientModel.findOne()
    .select('_id')
    .sort({ _id: -1 })
    .exec();

  client._id = lastInsert ? +lastInsert._id + 1 : 1;
  const savedClient = new ClientModel(client);
  const result = await savedClient.save();
  return result;
}

async function clientExists(documentType: string, documentNumber: string) {
  const exists = ClientModel.exists({
    documentType: documentType,
    documentNumber: documentNumber,
  }).exec();

  return exists;
}

async function getClient(documentType: string, documentNumber: string) {
  const result = await ClientModel.findOne({
    documentType: documentType,
    documentNumber: documentNumber,
  }).exec();

  return result;
}

export default {
  createClient,
  clientExists,
  getClient,
};
