import React, { Component } from 'react';
import { Container, Button, List, Message } from 'semantic-ui-react'

import AdditionalFilesUploader from './uploaders/AdditionalFilesUploader'
import InvoiceUploader from './uploaders/InvoiceUploader'
import InvoiceDetails from './InvoiceDetails'
import AdditionalFile from './AdditionalFile'
import SuccessPage from './SuccessPage'

import '../styles/App.css';

const request = require('superagent');

class App extends Component {
  constructor() {
    super()

    this.state = {
      additionalFiles: [],
      submitted: false,
      errors: []
    }

    this.removeAdditionalFile = this.removeAdditionalFile.bind(this)
    this.updateFileDescription = this.updateFileDescription.bind(this)
    this.addAdditionalFile = this.addAdditionalFile.bind(this)
    this.submitInvoiceInfo = this.submitInvoiceInfo.bind(this)
    this.setInvoiceFile = this.setInvoiceFile.bind(this)
    this.setRecipient = this.setRecipient.bind(this)
    this.setAmount = this.setAmount.bind(this)
    this.setDate = this.setDate.bind(this)
  }

  removeAdditionalFile(id) {
    let additionalFiles = this.state.additionalFiles;
    additionalFiles.splice(id, 1)
    this.setState({additionalFiles: additionalFiles})
  }
  addAdditionalFile(acceptedFiles) {
    let newFiles = acceptedFiles.map((af) => {
      return {description: '', file: af}
    })
    this.setState({additionalFiles: this.state.additionalFiles.concat(newFiles)})
  }
  updateFileDescription(id, description) {
    let additionalFiles = this.state.additionalFiles
    additionalFiles[id].description = description
    this.setState({additionalFiles: additionalFiles})
  }
  setInvoiceFile(acceptedFiles) {
    this.setState({invoiceFile: acceptedFiles[0]})
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

  extractErrors(errorMsg) {
    var errors = []
    let parsed = JSON.parse(errorMsg)
    for(var field in parsed) {
      if (parsed[field].length > 0) {
        let fieldName = field.replace(/\./g, ' ')
        let errorMessage = parsed[field].join(' and ')
        errors = errors.concat(fieldName + ' ' + errorMessage)
      }
    }
    return errors
  }

  backToSubmission() {
    this.setState({
      submitted: false,
      additionalFiles: [],
      invoiceFile: null,
      recipient: null
    })
  }

  submitInvoiceInfo() {
    const self = this

    let req = request.post('v1/invoices')
      .field('invoice[date]', this.state.date)
      .field('invoice[amount]', this.state.amount)
      .field('invoice[recipient_attributes][name]', this.state.recipient.name)
      .field('invoice[recipient_attributes][surname]', this.state.recipient.surname)
      .field('invoice[recipient_attributes][address]', this.state.recipient.address)
      .field('invoice[recipient_attributes][phone]', this.state.recipient.phone)
      .attach('invoice[attachment]', this.state.invoiceFile)

    this.state.additionalFiles.forEach((af) => {
      req.field('invoice[additional_files_attributes][][description]', af.description)
      req.attach('invoice[additional_files_attributes][][body]', af.file)
    })

    req.end(function(err, res){
      if (err) {
        self.setState({ errors: self.extractErrors(res.text) })
      } else {
        self.setState({ errors: [], submitted: true })
      }
    })
  }

  render() {
    let errorSection = null
    let invoiceSection = null
    let filesSection = null
    let successSection = null
    let actionButton = null

    if (this.state.submitted) {
      const recipientFullname = `${this.state.recipient.name} ${this.state.recipient.surname}`

      successSection = <SuccessPage invoiceFilename={this.state.invoiceFile.name}
        invoiceDate={this.state.date.format('DD/MM/YYYY')} recipientFullname={recipientFullname}
        recipientAddress={this.state.recipient.address} recipientPhone={this.state.recipient.phone}/>

      actionButton = <Button floated='right' content='Submit another invoice'
        onClick={this.backToSubmission.bind(this)}/>

    } else {

      if (this.state.invoiceFile != null) {
        invoiceSection = <InvoiceDetails invoiceFilename={this.state.invoiceFile.name}
          setRecipient={this.setRecipient} setAmount={this.setAmount} setDate={this.setDate}/>
      } else {
        invoiceSection = <InvoiceUploader setInvoiceFile={this.setInvoiceFile}/>
      }

      if (this.state.additionalFiles.length > 0) {
        let fileList = this.state.additionalFiles.map((af, id) => {
          return <List.Item key={id}>
            <AdditionalFile id={id} fileName={af.file.name}
              removeAdditionalFile={this.removeAdditionalFile}
              updateFileDescription={this.updateFileDescription}/>
          </List.Item>
        })
        filesSection = <div>
          <List divided relaxed>{fileList}</List>
          <AdditionalFilesUploader addAdditionalFile={this.addAdditionalFile}/>
        </div>
      } else {
        filesSection = <AdditionalFilesUploader addAdditionalFile={this.addAdditionalFile}/>
      }

      if (this.state.errors.length > 0) {
        errorSection = <Message error list={this.state.errors}
          header='There are some problems with your submission'/>
      }

      actionButton = <Button disabled={this.cannotProceed()} content='Proceed'
        floated='right' onClick={this.submitInvoiceInfo.bind(this)}/>
    }

    return <Container>
      {errorSection}
      {invoiceSection}
      {filesSection}
      {successSection}
      {actionButton}
    </Container>
  }
}

export default App;
