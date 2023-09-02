const SET_ORGANAIZE_DEVTALK = 'aboutReducer/SET_ORGANAIZE_DEVTALK'
const SET_DEVTALK_TOPIC = 'aboutReducer/SET_DEVTALK_TOPIC'
const SET_SOMETHING_SPECIAL = 'aboutReducer/SET_SOMETHING_SPECIAL'

let initialize = {
  organizeDevtalk: '',
  devtalkTopic: '',
  somethingSpecial: ''
}

const aboutReducer = (state = initialize, action) => {
  switch (action.type) {
    case SET_ORGANAIZE_DEVTALK:
      return { ...state, organizeDevtalk: action.payload.data }
    case SET_DEVTALK_TOPIC:
      return { ...state, devtalkTopic: action.payload.data }
    case SET_SOMETHING_SPECIAL:
      return { ...state, somethingSpecial: action.payload.data }

    default:
      return state
  }
}
export const setOrganizeDevtalk = data => ({
  type: SET_ORGANAIZE_DEVTALK,
  payload: { data }
})
export const setDevtalkTopic = data => ({
  type: SET_DEVTALK_TOPIC,
  payload: { data }
})
export const setSomethingSpecial = data => ({
  type: SET_SOMETHING_SPECIAL,
  payload: { data }
})

export default aboutReducer
