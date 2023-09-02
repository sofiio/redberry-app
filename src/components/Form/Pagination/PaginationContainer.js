import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../../../store/pageReducer'
import Pagination from './Pagination'

class PaginationContainer extends React.Component {
  nextButtonHandler = () => {
    this.props.setPage(this.props.page + 1)
  }
  prevButtonHandler = () => {
    this.props.setPage(this.props.page - 1)
  }

  pageHandler = page => {
    this.props.setPage(page)
  }

  render() {
    return (
      <Pagination
        form={this.props.form}
        isValid={this.props.isValid}
        validation={this.props.validation}
        nextButtonHandler={this.nextButtonHandler}
        prevButtonHandler={this.prevButtonHandler}
        page={this.props.page}
        totalPages={this.props.totalPages}
        pageHandler={this.pageHandler}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    page: state.pageReducer.page,
    totalPages: state.pageReducer.totalPages,
    validation: state.pageReducer.validation
  }
}
export default connect(mapStateToProps, { setPage })(PaginationContainer)
