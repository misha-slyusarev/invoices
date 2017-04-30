import * as invoiceActionTypes from '../constants/InvoiceActionTypes';

export function uploadInvoice() {
  return {
    type: invoiceActionTypes.UPLOADED
  };
}
