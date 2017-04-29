import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export default class Uploader extends Component {
  render() {
    console.log(this.props.multiple)
    return (
      <Dropzone className='uploader' multiple={this.props.multiple} accept={'image/*'} onDrop={this.dropHandler}>
        <div> {this.props.title} </div>
      </Dropzone>
    );
  }

  dropHandler(file) {
    console.log('File uploaded');
  }
}
