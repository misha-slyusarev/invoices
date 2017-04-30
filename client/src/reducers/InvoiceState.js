import * as actionTypes from '../constants/InvoiceActionTypes';

const initialState = {
  invoiceUploaded: false
}

export default function invoiceState(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPLOADED:
      return {
        invoiceUploaded: true
      }

    default:
      return state;
  }
}
