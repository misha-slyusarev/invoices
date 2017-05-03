import React, { Component } from 'react';
import { Segment, Header, List } from 'semantic-ui-react'

export default class SuccessPage extends Component {

  render() {
    return <Segment className='App-segment'>
      <Header as='h2' color='green' textAlign='center'>
        Your invoice was succesfully submitted!
      </Header>
      <List>
        <List.Item>
          <List.Header>Invoice file name</List.Header>
          <span>{this.props.invoiceFilename}</span>
        </List.Item>
        <List.Item>
          <List.Header>Invoice date</List.Header>
          <span>{this.props.invoiceDate}</span>
        </List.Item>
        <List.Item>
          <List.Header>Recipient full name</List.Header>
          <span>{this.props.recipientFullname}</span>
        </List.Item>
        <List.Item>
          <List.Header>Recipient address</List.Header>
          <span>{this.props.recipientAddress}</span>
        </List.Item>
        <List.Item>
          <List.Header>Recipient phone</List.Header>
          <span>{this.props.recipientPhone}</span>
        </List.Item>
      </List>
    </Segment>
  }
}
