import React, { Component } from 'react';
import { Modal, Input, Button, Form } from 'semantic-ui-react'

export default class RecipientInfo extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false, name: '', surname: '', address: '', phone: ''
    }
  }

  handleOpen = (e) => this.setState({ modalOpen: true })
  handleCancel = (e) => this.setState({ modalOpen: false })
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleOk = (e) => {
    this.props.setRecipient({
      name: this.state.name,
      surname: this.state.surname,
      address: this.state.address,
      phone: this.state.phone
    })
    this.setState({ modalOpen: false })
  }
  recipientInfoEntered = () => {
    return this.state.name || this.state.surname ||
      this.state.address || this.state.phone
  }

  render() {
    let recipientInfo = null
    let triggerName = 'Add recipient'

    if (!this.state.modalOpen && this.recipientInfoEntered()) {
      recipientInfo = <div>
        <strong>Name: </strong>{this.state.name}<br/>
        <strong>Surame: </strong>{this.state.surname}<br/>
        <strong>Address: </strong>{this.state.address}<br/>
        <strong>Phone: </strong>{this.state.phone}<br/>
      </div>
      triggerName = 'Edit recipient'
    }

    return <div>
      {recipientInfo}
      <Modal trigger={<Button onClick={this.handleOpen} content={triggerName}/>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        dimmer='inverted'
        size='small'>
        <Modal.Content>
          <h3>Add recipient</h3>
          <Form>
            <Form.Input label='First name' name='name' value={this.state.name}
              onChange={this.handleChange} />
            <Form.Input label='Surame' name='surname' value={this.state.surname}
              onChange={this.handleChange} />
            <Form.Input label='Address' name='address' value={this.state.address}
              onChange={this.handleChange} />
            <Form.Input label='Phone' name='phone' value={this.state.phone}
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
