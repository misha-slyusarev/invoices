import React, { Component } from 'react';
import { Grid, Input, Button, Segment } from 'semantic-ui-react'
import RecipientInfo from './RecipientInfo'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class InvoiceDetails extends Component {
  constructor() {
    super()
    this.state = {date: moment()}
  }

  handleAmountChange = (e) => this.props.setAmount(e.target.value)
  handleDateChange = (date) => {
    this.setState({date: date})
    this.props.setDate(date)
  }

  render() {
    return <Grid columns={2}>
      <Grid.Column width={12}>
        <Segment>
          <Input label='Invoice amount' placeholder='Amount' onChange={this.handleAmountChange}/>
          <DatePicker selected={this.state.date} onChange={this.handleDateChange} />
        </Segment>
        <p>Invoice file: {this.props.invoiceFilename}</p>
      </Grid.Column>
      <Grid.Column width={4}>
        <RecipientInfo setRecipient={this.props.setRecipient}/>
      </Grid.Column>
    </Grid>
  }
}
