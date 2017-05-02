import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react'

export default class AdditionalFile extends Component {
  constructor() {
    super()
    this.state = {}
  }
  updateDescription = (e) => this.setState({description: e.target.value})
  removeAdditionalFile = (e) => this.props.removeAdditionalFile(this.props.fileName)

  render() {
    return <div>
      <strong style={{paddingRight: 10 + 'px'}}>{this.props.fileName}</strong>
      <Input label='Description' onChange={this.updateDescription}/>
      <Button content='Remove' size='mini' floated='right' negative onClick={this.removeAdditionalFile}/>
    </div>
  }
}

// value={this.state.description}
