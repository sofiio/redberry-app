import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../../store/pageReducer'
import Form from './Form'

class FormContainer extends React.Component {
  componentDidMount() {
    this.props.setPage(1)
  }
  render() {
    return <Form page={this.props.page} />
  }
}

let mapStateToProps = state => {
  return {
    page: state.pageReducer.page
  }
}
export default connect(mapStateToProps, {setPage})(FormContainer)
