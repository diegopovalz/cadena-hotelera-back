import { model } from 'mongoose';
import { Invoice, schema } from '../model/invoice';

const InvoiceRepository = model<Invoice>('Invoice', schema);

export { InvoiceRepository };
