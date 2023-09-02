const FORM_DATA = 'personalReducer/FORM_DATA'

let initialize = {
  formData: { firstName: '', lastName: '', email: '', phone: '' }
}

const personalReducer = (state = initialize, action) => {
  switch (action.type) {
    case FORM_DATA:
      return { ...state, formData: action.payload.data }

    default:
      return state
  }
}
export const setFormData = data => ({ type: FORM_DATA, payload: { data } })

export default personalReducer
