import React, { Component } from 'react'
import { connect } from 'react-redux'
import Submit from './Submit'

import { setPage } from '../../store/pageReducer'
import { postApplications } from '../../store/applicationReducer'
import { resetState } from '../../store/appReducer'

class SubmitContainer extends Component {
  pageHandler = page => {
    this.props.setPage(page)
  }
  submitHandler = data => {
    this.props.postApplications(data)
  }

  resetDataHandler = () => {
    this.props.resetState()
  }
  render() {
    return (
      <Submit
        pageHandler={this.pageHandler}
        page={this.props.page}
        submitHandler={this.submitHandler}
        personalData={this.props.personalData}
        skillsData={this.props.skillsData}
        applications={this.props.applications}
        workPreference={this.props.workPreference}
        hadCovid={this.props.hadCovid}
        hadCovidAt={this.props.hadCovidAt}
        vaccinated={this.props.vaccinated}
        vaccinatedAt={this.props.vaccinatedAt}
        organizeDevtalk={this.props.organizeDevtalk}
        devtalkTopic={this.props.devtalkTopic}
        somethingSpecial={this.props.somethingSpecial}
        resetDataHandler={this.resetDataHandler}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    page: state.pageReducer.page,
    personalData: state.personalReducer.formData,
    skillsData: state.skillsReducer.selectedSkills,
    applications: state.applicationReducer.applications,
    workPreference: state.covidReducer.workPreference,
    hadCovid: state.covidReducer.hadCovid,
    hadCovidAt: state.covidReducer.hadCovidAt,
    vaccinated: state.covidReducer.vaccinated,
    vaccinatedAt: state.covidReducer.vaccinatedAt,
    organizeDevtalk: state.aboutReducer.organizeDevtalk,
    devtalkTopic: state.aboutReducer.devtalkTopic,
    somethingSpecial: state.aboutReducer.somethingSpecial
  }
}
export default connect(mapStateToProps, {
  setPage,
  postApplications,
  resetState
})(SubmitContainer)
