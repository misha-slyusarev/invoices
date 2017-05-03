import React, { Component } from 'react';
import { Grid, Form, Segment } from 'semantic-ui-react'
import RecipientInfo from './RecipientInfo'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class InvoiceDetails extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.handleDateChange(moment())
    this.props.setAmount(0)
  }

  handleAmountChange = (e) => this.props.setAmount(e.target.value)
  handleDateChange = (date) => {
    this.setState({date: date})
    this.props.setDate(date)
  }

  render() {
    return <Segment className='App-segment'>
      <Grid columns={2}>
        <Grid.Column width={10}>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input label='Invoice amount' placeholder='Amount' width={10} onChange={this.handleAmountChange}/>
              <Form.Field label='Date' control={DatePicker} selected={this.state.date} onChange={this.handleDateChange} />
            </Form.Group>
            <p>Invoice file: {this.props.invoiceFilename}</p>
          </Form>
        </Grid.Column>
        <Grid.Column width={6}>
          <RecipientInfo setRecipient={this.props.setRecipient}/>
        </Grid.Column>
      </Grid>
    </Segment>
  }
}
