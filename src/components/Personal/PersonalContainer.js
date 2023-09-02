import React from 'react'
import { connect } from 'react-redux'
import { setFormData } from '../../store/personalReducer'
import Personal from './Personal'

class PersonalContainer extends React.Component {
  formDataHandler = (value, fieldKey) => {
    this.props.setFormData({
      ...this.props.formData,
      [fieldKey]: value
    })
  }

  render() {
    return (
      <Personal
        formData={this.props.formData}
        formDataHandler={this.formDataHandler}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    formData: state.personalReducer.formData
  }
}
export default connect(mapStateToProps, { setFormData })(PersonalContainer)
