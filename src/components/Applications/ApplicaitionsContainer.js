import React, { Component } from 'react'
import { Applications } from './Applications'
import { getApplications, setChecked } from '../../store/applicationReducer'
import { getSkills } from '../../store/skillsReducer'
import { connect } from 'react-redux'

class ApplicationsContainer extends Component {
  componentDidMount() {
    this.props.getApplications()
    this.props.getSkills()
  }

  checkedHandler = data => {
    this.props.setChecked(data)
  }

  render() {
    return (
      <Applications
        data={this.props.applications}
        checked={this.props.checked}
        checkedHandler={this.checkedHandler}
        skillsList={this.props.skills}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    applications: state.applicationReducer.applications,
    checked: state.applicationReducer.checked,
    skills: state.skillsReducer.skills
  }
}
export default connect(mapStateToProps, {
  getApplications,
  setChecked,
  getSkills
})(ApplicationsContainer)
