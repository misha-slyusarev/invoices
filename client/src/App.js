import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react'
import Uploader from './components/Uploader'
import InvoiceUploader from './components/InvoiceUploader'
import InvoiceDetails from './components/InvoiceDetails'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.getRecipients = this.getRecipients.bind(this)
    this.setInvoiceFile = this.setInvoiceFile.bind(this)
  }
  componentDidMount() {
    this.getRecipients()
  }
  fetch(endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  getRecipients() {
    this.fetch('v1/recipients')
      .then(recipients => {
        this.setState({recipients: recipients})
        this.getRecipient(recipients[0].id)
      })
  }
  getRecipient(id) {
    this.fetch(`v1/recipients/${id}`)
      .then(recipient => this.setState({recipient: recipient}))
  }

  setInvoiceFile(acceptedFiles) {
    this.setState({invoiceFile: acceptedFiles[0]});
  }

  render() {
    let invoiceSection = null;
    let filesSection = null;

    if (this.state.invoiceFile != null) {
      invoiceSection = <InvoiceDetails invoiceFilename={this.state.invoiceFile.name}/>
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
      </Container>
    )
  }
}

export default App;
