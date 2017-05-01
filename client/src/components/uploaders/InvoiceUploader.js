import React, { Component } from 'react';
import Uploader from './Uploader'

export default class InvoiceUploader extends Component {
  render() {
    return (
      <Uploader multiple={false} accept='application/pdf' title='Upload your invoice'
        handleAcceptedFiles={this.props.setInvoiceFile.bind(this)}/>
    )
  }
}
