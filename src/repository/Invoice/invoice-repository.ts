import { model } from 'mongoose';
import { Invoice, schema } from '../../model/Invoice/invoice';

const InvoiceRepository = model<Invoice>('Invoice', schema, 'invoices');

export { InvoiceRepository };
