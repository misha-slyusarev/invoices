import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.css'
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import invoiceState from './reducers/InvoiceState'
let store = createStore(invoiceState)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
