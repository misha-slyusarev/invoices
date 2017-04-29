import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export default class Uploader extends Component {
  render() {
    return (
      <Dropzone className='uploader' multiple={this.props.multiple}
       accept={'image/*'} onDrop={this.dropHandler.bind(this)}>
        <div> {this.props.title} </div>
      </Dropzone>
    );
  }

  dropHandler(file) {
    this.props.markInvoiceUploaded();
  }
}
