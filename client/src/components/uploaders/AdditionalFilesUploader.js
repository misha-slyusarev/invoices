import React, { Component } from 'react';
import Uploader from './Uploader'

export default class AdditionalFilesUploader extends Component {
  render() {
    return (
      <Uploader multiple={true} accept='image/*,application/pdf' title='Drag your files'
        handleAcceptedFiles={this.props.addAdditionalFile.bind(this)}/>
    )
  }
}
