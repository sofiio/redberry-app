import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getApplications } from '../../store/applicationReducer'
import Welcome from './Welcome'

class WelcomeContainer extends Component {
  componentDidMount() {
    this.props.getApplications()
  }
  render() {
    return <Welcome applications={this.props.applications} />
  }
}

let mapStateToProps = state => {
  return {
    applications: state.applicationReducer.applications
  }
}

export default connect(mapStateToProps, { getApplications })(WelcomeContainer)
