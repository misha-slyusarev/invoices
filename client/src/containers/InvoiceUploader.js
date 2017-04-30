import { connect } from 'react-redux'
import { uploadInvoice } from '../actions/InvoiceActions'
import Uploader from '../components/Uploader'

const mapStateToProps = (state) => {
  return {
    title: 'Upload your invoice',
    invoiceUploaded: state.invoiceUploaded
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDrop: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const InvoiceUploader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Uploader)

export default InvoiceUploader
