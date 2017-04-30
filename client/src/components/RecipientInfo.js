import React, { Component } from 'react';
import { Modal, Input, Button, Grid, Form } from 'semantic-ui-react'

export default class RecipientInfo extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      name: '',
      surname: '',
      address: '',
      phone: '',
      recipient: null
    }
  }

  handleOpen = (e) => this.setState({
    modalOpen: true
  })

  handleCancel = (e) => this.setState({
    modalOpen: false
  })

  handleOk = (e) => {
    let recipient = {
      name: this.state.name,
      surname: this.state.surname,
      address: this.state.address,
      phone: this.state.phone,
    }
    this.setState({
      recipient: recipient,
      modalOpen: false
    })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    let recipientInfo = null
    if (!this.state.modalOpen && this.state.recipient) {
      recipientInfo = <div>
        <strong>Name: </strong>{this.state.recipient.name}<br/>
        <strong>Surame: </strong>{this.state.recipient.surname}<br/>
        <strong>Address: </strong>{this.state.recipient.address}<br/>
        <strong>Phone: </strong>{this.state.recipient.phone}<br/>
      </div>
    }

    return <div>
      {recipientInfo}
      <Modal
        trigger={<Button onClick={this.handleOpen}>Add recepient</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        dimmer='inverted'
        size='small'>
        <Modal.Content>
          <h3>Add recipient</h3>
          <Form>
            <Form.Field control={Input} label='First name' name='name' value={this.state.name}
              onChange={this.handleChange} />
            <Form.Field control={Input} label='Surame' name='surname' value={this.state.surname}
              onChange={this.handleChange} />
            <Form.Field control={Input} label='Address' name='address' value={this.state.address}
              onChange={this.handleChange} />
            <Form.Field control={Input} label='Phone' name='phone' value={this.state.phone}
              onChange={this.handleChange} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button.Group>
            <Button onClick={this.handleCancel}>Cancel</Button>
            <Button positive onClick={this.handleOk}>Ok</Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
    </div>
  }
}
