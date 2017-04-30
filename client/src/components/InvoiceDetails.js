import React, { Component } from 'react';
import { Grid, Input, Button, Segment } from 'semantic-ui-react'
import { SingleDatePicker } from 'react-dates';
import RecipientInfo from './RecipientInfo'

export default class InvoiceDetails extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return <Grid columns={2}>
      <Grid.Column width={12}>
        <Segment>
          <Input label='Invoice amount' placeholder='Amount' />
          <Input style={{paddingLeft: 20 + 'px'}} label='Invoice date' placeholder='Date' />
        </Segment>
        <p>Invoice file: {this.props.invoiceFilename}</p>
      </Grid.Column>
      <Grid.Column width={4}>
        <RecipientInfo />
      </Grid.Column>
    </Grid>
  }
}


// <SingleDatePicker
        //   date={this.state.date}
        //   focused={this.state.focused}
        //   onDateChange={date => this.setState({ date })}
        //   onFocusChange={({ focused }) => this.setState({ focused })}
        // />
