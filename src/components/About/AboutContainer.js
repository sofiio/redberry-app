import React from 'react'
import { connect } from 'react-redux'
import About from './About'
import {
  setOrganizeDevtalk,
  setDevtalkTopic,
  setSomethingSpecial
} from '../../store/aboutReducer'

class AboutContainer extends React.Component {
  organizeHandler = value => {
    this.props.setOrganizeDevtalk(value)
  }
  devtalkHandler = value => {
    this.props.setDevtalkTopic(value)
  }
  somethingSpecialHandler = value => {
    this.props.setSomethingSpecial(value)
  }
  render() {
    return (
      <About
        organizeHandler={this.organizeHandler}
        devtalkHandler={this.devtalkHandler}
        somethingSpecialHandler={this.somethingSpecialHandler}
        organizeDevtalk={this.props.organizeDevtalk}
        devtalkTopic={this.props.devtalkTopic}
        somethingSpecial={this.props.somethingSpecial}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    organizeDevtalk: state.aboutReducer.organizeDevtalk,
    devtalkTopic: state.aboutReducer.devtalkTopic,
    somethingSpecial: state.aboutReducer.somethingSpecial
  }
}
export default connect(mapStateToProps, {
  setOrganizeDevtalk,
  setDevtalkTopic,
  setSomethingSpecial
})(AboutContainer)
