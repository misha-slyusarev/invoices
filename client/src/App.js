import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react'
import Uploader from './components/Uploader'
import InvoiceUploader from './components/InvoiceUploader'
import InvoiceDetails from './components/InvoiceDetails'
import './App.css';

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
    fetch('v1/invoices', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        invoice: {
          recipient_attributes: this.state.recipient
        }
      })
    })
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
