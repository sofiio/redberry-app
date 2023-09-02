import React from 'react'
import { connect } from 'react-redux'

import {
  setSelectValue,
  setYear,
  setSelectSkills,
  removeSelectedSkills,
  getSkills
} from '../../store/skillsReducer'
import Skills from './Skills'

class SkillsContainer extends React.Component {
  componentDidMount() {
    this.props.getSkills()
  }
  selectedValueHandler = (value, id) => {
    const data = {
      value: value,
      id: id
    }
    this.props.setSelectValue(data)
  }
  yearHandler = value => {
    this.props.setYear(value)
  }

  addSkillHandler = selectedSkill => {
    this.props.setSelectSkills(selectedSkill)
    this.props.setSelectValue('')
    this.props.setYear('')
  }

  removeSkillHandle = id => {
    const shellArray = [...this.props.selectedSkills]
    const filteredArray = shellArray.filter(item => item.id !== id)
    this.props.removeSelectedSkills(filteredArray)
  }

  render() {
    return (
      <Skills
        page={this.props.page}
        selectedValue={this.props.selectedValue}
        selectedValueHandler={this.selectedValueHandler}
        experience={this.props.experience}
        yearHandler={this.yearHandler}
        addSkillHandler={this.addSkillHandler}
        selectedSkills={this.props.selectedSkills}
        removeSkillHandle={this.removeSkillHandle}
        skills={this.props.skills}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    page: state.pageReducer.page,
    selectedValue: state.skillsReducer.selectedValue,
    experience: state.skillsReducer.experience,
    selectedSkills: state.skillsReducer.selectedSkills,
    skills: state.skillsReducer.skills
  }
}
export default connect(mapStateToProps, {
  setSelectValue,
  setYear,
  setSelectSkills,
  removeSelectedSkills,
  getSkills
})(SkillsContainer)
