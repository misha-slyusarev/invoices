import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react'

export default class RecipientModal extends Component {
  constructor() {
    super()
    this.state = { modalOpen: false }
  }

  handleOpen = (e) => this.setState({
    modalOpen: true
  })

  handleClose = (e) => this.setState({
    modalOpen: false
  })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Add recepient</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        dimmer='inverted'
        size='small'>

        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose}>
            Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
