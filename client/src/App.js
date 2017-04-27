import React, { Component } from 'react';
import { Container, Header, Dimmer, Loader, Divider } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.getRecipients = this.getRecipients.bind(this)
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
  render() {
    let {recipients, recipient} = this.state
    return recipients
    ? <Container text>
        <Header as='h2' icon textAlign='center'>
          <Header.Content>
            List of recipients
          </Header.Content>
        </Header>
      <Divider hidden />
      {recipient &&
        <Container>
          <Header as='h2'>{recipient.name}</Header>
          {recipient.surname && <p>{recipient.surname}</p>}
          {recipient.address && <p>{recipient.address}</p>}
        </Container>
      }
    </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  }
}

export default App;
