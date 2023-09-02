import { applicationAPI } from '../api/api'

const SET_APPLICATIONS = 'pageReducer/PAGE'
const SET_CHECKED = 'pageReducer/SET_CHECKED'

let initialize = {
  applications: [],
  checked: { value: false, id: null }
}

const applicationReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_APPLICATIONS:
      return { ...state, applications: action.payload.data }
    case SET_CHECKED:
      return { ...state, checked: action.payload.data }

    default:
      return state
  }
}
export const setApplications = data => ({
  type: SET_APPLICATIONS,
  payload: { data }
})
export const setChecked = data => ({
  type: SET_CHECKED,
  payload: { data }
})

export const getApplications = () => async dispatch => {
  const token = `ca513714-3eb1-4441-9362-4c0c5d4f4b02`
  let data = await applicationAPI.getApplications(encodeURIComponent(token))
  dispatch(setApplications(data))
}
export const postApplications = storeData => async dispatch => {
  applicationAPI.storeApplication(storeData)
}

export default applicationReducer
