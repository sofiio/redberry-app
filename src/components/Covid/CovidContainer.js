import React from 'react'
import { connect } from 'react-redux'
import Covid from './Covid'
import {
  setWorkplace,
  setCovidDate,
  setCovidContact,
  setVaccineDate,
  setVacinated
} from '../../store/covidReducer'

class CovidContainer extends React.Component {
  workPreferenceHandler = value => {
    this.props.setWorkplace(value)
  }
  hadCovidAtHandler = value => {
    this.props.setCovidDate(value)
  }
  hadCovidHandler = value => {
    this.props.setCovidContact(value)
  }
  vaccinatedAtHandler = value => {
    this.props.setVaccineDate(value)
  }
  vaccinatedHandler = value => {
    this.props.setVacinated(value)
  }
  render() {
    return (
      <Covid
        workPreferenceHandler={this.workPreferenceHandler}
        hadCovidAtHandler={this.hadCovidAtHandler}
        hadCovidHandler={this.hadCovidHandler}
        workPreference={this.props.workPreference}
        hadCovid={this.props.hadCovid}
        hadCovidAt={this.props.hadCovidAt}
        vaccinated={this.props.vaccinated}
        vaccinatedAt={this.props.vaccinatedAt}
        vaccinatedHandler={this.vaccinatedHandler}
        vaccinatedAtHandler={this.vaccinatedAtHandler}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    workPreference: state.covidReducer.workPreference,
    hadCovid: state.covidReducer.hadCovid,
    hadCovidAt: state.covidReducer.hadCovidAt,
    vaccinated: state.covidReducer.vaccinated,
    vaccinatedAt: state.covidReducer.vaccinatedAt
  }
}
export default connect(mapStateToProps, {
  setWorkplace,
  setCovidContact,
  setCovidDate,
  setVaccineDate,
  setVacinated
})(CovidContainer)
