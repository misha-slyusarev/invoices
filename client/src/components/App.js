import React, { Component } from 'react';
import { Container, Segment, Button } from 'semantic-ui-react'
import AdditionalFilesUploader from './uploaders/AdditionalFilesUploader'
import InvoiceUploader from './uploaders/InvoiceUploader'
import InvoiceDetails from './InvoiceDetails'
import AdditionalFile from './AdditionalFile'
import '../styles/App.css';

const request = require('superagent');

class App extends Component {
  constructor() {
    super()
    this.state = {
      additionalFiles: []
    }

    this.removeAdditionalFile = this.removeAdditionalFile.bind(this)
    this.addAdditionalFile = this.addAdditionalFile.bind(this)
    this.submitInvoiceInfo = this.submitInvoiceInfo.bind(this)
    this.setInvoiceFile = this.setInvoiceFile.bind(this)
    this.setRecipient = this.setRecipient.bind(this)
    this.setAmount = this.setAmount.bind(this)
    this.setDate = this.setDate.bind(this)
  }

  removeAdditionalFile(fileName) {
    let additionalFiles = this.state.additionalFiles
    let index = additionalFiles.map((af) => { return af.name }).indexOf(fileName)
    additionalFiles.splice(index, 1);
    this.setState({additionalFiles: additionalFiles});
  }
  addAdditionalFile(acceptedFiles) {
    const files = this.state.additionalFiles.concat(acceptedFiles[0])
    this.setState({additionalFiles: files})
  }
  setInvoiceFile(acceptedFiles) {
    this.setState({invoiceFile: acceptedFiles[0]});
  }
  setRecipient(recipient) {
    this.setState({recipient: recipient})
  }
  setAmount(amount) {
    this.setState({amount: amount})
  }
  setDate(date) {
    this.setState({date: date})
  }

  cannotProceed() {
    return !(this.state.invoiceFile && this.state.recipient)
  }

  submitInvoiceInfo() {
    request.post('v1/invoices')
      .field('invoice[date]', this.state.date)
      .field('invoice[amount]', this.state.amount)
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
        setRecipient={this.setRecipient} setAmount={this.setAmount} setDate={this.setDate}/>
    } else {
      invoiceSection = <InvoiceUploader setInvoiceFile={this.setInvoiceFile}/>
    }

    if (this.state.additionalFiles.length > 0) {
      const fileName = this.state.additionalFiles[0].name
      filesSection = <div>
        <AdditionalFile fileName={fileName} removeAdditionalFile={this.removeAdditionalFile}/>
        <AdditionalFilesUploader addAdditionalFile={this.addAdditionalFile}/>
      </div>
    } else {
      filesSection = <AdditionalFilesUploader addAdditionalFile={this.addAdditionalFile}/>
    }

    return (
      <Container>
        {invoiceSection}
        {filesSection}
        <Button disabled={this.cannotProceed()} content='Proceed'
          floated='right' onClick={this.submitInvoiceInfo}/>
      </Container>
    )
  }
}

export default App;
