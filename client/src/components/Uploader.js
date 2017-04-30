import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export default class Uploader extends Component {
  render() {
    return (
      <Dropzone className='uploader' multiple={this.props.multiple}
       accept={this.props.accept} onDrop={this.dropHandler.bind(this)}>
        <div> {this.props.title} </div>
      </Dropzone>
    );
  }
  dropHandler(acceptedFiles, rejectedFiles) {
    this.props.handleAcceptedFiles(acceptedFiles);
  }
}
