const SET_WORKPLACE = 'covidReducer/SET_WORKPLACE'
const SET_COVID_CONTACT = 'covidReducer/SET_COVID_CONTACT'
const SET_COVID_DATE = 'covidReducer/SET_COVID_DATE'
const SET_VACCINATED = 'covidReducer/SET_VACCINATED'
const SET_VACCINE_DATE = 'covidReducer/SET_VACCINATED_DATE'

let initialize = {
  workPreference: '',
  hadCovid: '',
  hadCovidAt: '',
  vaccinated: '',
  vaccinatedAt: ''
}

const covidReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_WORKPLACE:
      return { ...state, workPreference: action.payload.data }
    case SET_COVID_CONTACT:
      return { ...state, hadCovid: action.payload.data }
    case SET_COVID_DATE:
      return { ...state, hadCovidAt: action.payload.data }
    case SET_VACCINATED:
      return { ...state, vaccinated: action.payload.data }
    case SET_VACCINE_DATE:
      return { ...state, vaccinatedAt: action.payload.data }
    default:
      return state
  }
}
export const setWorkplace = data => ({ type: SET_WORKPLACE, payload: { data } })
export const setCovidContact = data => ({
  type: SET_COVID_CONTACT,
  payload: { data }
})
export const setCovidDate = data => ({
  type: SET_COVID_DATE,
  payload: { data }
})
export const setVaccineDate = data => ({
  type: SET_VACCINE_DATE,
  payload: { data }
})
export const setVacinated = data => ({
  type: SET_VACCINATED,
  payload: { data }
})

export default covidReducer
