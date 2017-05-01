import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react'
import Uploader from './components/Uploader'
import InvoiceUploader from './components/InvoiceUploader'
import InvoiceDetails from './components/InvoiceDetails'
import './App.css';

const request = require('superagent');

class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.submitInvoiceInfo = this.submitInvoiceInfo.bind(this)
    this.setInvoiceFile = this.setInvoiceFile.bind(this)
    this.setRecipient = this.setRecipient.bind(this)
  }

  setInvoiceFile(acceptedFiles) {
    this.setState({invoiceFile: acceptedFiles[0]});
  }

  setRecipient(recipient) {
    this.setState({recipient: recipient})
  }

  cannotProceed() {
    return !(this.state.invoiceFile && this.state.recipient)
  }

  submitInvoiceInfo() {
    request.post('v1/invoices')
      .field('invoice[recipient_attributes][name]', this.state.recipient.name)
      .field('invoice[recipient_attributes][surname]', this.state.recipient.surname)
      .field('invoice[recipient_attributes][address]', this.state.recipient.address)
      .field('invoice[recipient_attributes][phone]', this.state.recipient.phone)
      .attach('invoice[attachment]', this.state.invoiceFile)
      .end(function(err, res){
        console.log('invoiceInfo submitted')
    });
  }

  render() {
    let invoiceSection = null;
    let filesSection = null;

    if (this.state.invoiceFile != null) {
      invoiceSection = <InvoiceDetails invoiceFilename={this.state.invoiceFile.name}
        setRecipient={this.setRecipient}/>
    } else {
      invoiceSection = <InvoiceUploader setInvoiceFile={this.setInvoiceFile}/>
    }

    return (
      <Container>
        <Segment>
          {invoiceSection}
        </Segment>
        <Segment>
          <Uploader title='Drag your files' multiple={true}/>
        </Segment>
        <Button disabled={this.cannotProceed()} content='Proceed'
          floated='right' onClick={this.submitInvoiceInfo}/>
      </Container>
    )
  }
}

export default App;
