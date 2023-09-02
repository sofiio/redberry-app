import { skillsAPI } from '../api/api'

const SET_SELECTED_VALUE = 'skillsReducer/SET_SELECT_VALUE'
const SET_YEAR = 'skillsReducer/SET_YEAR'
const SET_SELECTED_SKILLS = 'skillsReducer/SET_SELECTED_SKILLS'
const REMOVE_SELECTED_SKILLS = 'skillsReducer/REMOVE_SELECTED_SKILLS'
const SET_SKILLS = 'skillsReducer/SET_SKILLS'

let initialize = {
  selectedValue: {},
  experience: '',
  selectedSkills: [],
  skills: []
}

const skillsReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_SELECTED_VALUE:
      return { ...state, selectedValue: action.payload.data }
    case SET_YEAR:
      return { ...state, experience: action.payload.value }
    case SET_SELECTED_SKILLS:
      return {
        ...state,
        selectedSkills: [...state.selectedSkills, action.payload.skill]
      }
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload.skillsData
      }
    case REMOVE_SELECTED_SKILLS:
      return {
        ...state,
        selectedSkills: action.payload.skills
      }

    default:
      return state
  }
}
export const setSelectValue = data => ({
  type: SET_SELECTED_VALUE,
  payload: { data }
})
export const setYear = value => ({
  type: SET_YEAR,
  payload: { value }
})
export const setSelectSkills = skill => ({
  type: SET_SELECTED_SKILLS,
  payload: { skill }
})
export const removeSelectedSkills = skills => ({
  type: REMOVE_SELECTED_SKILLS,
  payload: { skills }
})
export const setSkills = skillsData => ({
  type: SET_SKILLS,
  payload: { skillsData }
})

export const getSkills = () => async dispatch => {
  let data = await skillsAPI.getSkills()
  dispatch(setSkills(data))
}

export default skillsReducer
