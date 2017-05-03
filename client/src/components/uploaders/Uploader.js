import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Segment } from 'semantic-ui-react'

export default class Uploader extends Component {
  render() {
    return <Segment className='App-segment'>
      <Dropzone className='uploader' multiple={this.props.multiple}
       accept={this.props.accept} onDrop={this.dropHandler.bind(this)}>
        <div> {this.props.title} </div>
      </Dropzone>
    </Segment>
  }
  dropHandler(acceptedFiles, rejectedFiles) {
    this.props.handleAcceptedFiles(acceptedFiles);
  }
}
