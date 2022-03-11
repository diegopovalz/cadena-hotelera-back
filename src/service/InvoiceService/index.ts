import { Invoice } from '../../model/Invoice/invoice';
import { InvoiceRepository as InvoiceModel } from '../../repository/Invoice/invoice-repository';

async function createInvoice(invoice: Invoice) {
  const lastInsert = await InvoiceModel.findOne()
    .select('_id')
    .sort({ _id: -1 })
    .exec();

  invoice._id = lastInsert ? +lastInsert._id + 1 : 1;
  const savedInvoice = new InvoiceModel(invoice);
  const result = savedInvoice.save();
  return result;
}

export default {
  createInvoice,
};
