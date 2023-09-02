import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import pageReducer from './pageReducer'
import personalReducer from './personalReducer'
import skillsReducer from './skillsReducer'
import covidReducer from './covidReducer'
import aboutReducer from './aboutReducer'
import applicationReducer from './applicationReducer'

const RESET_STATE = 'appReducer/RESET_STATE'

let reducers = combineReducers({
  pageReducer: pageReducer,
  personalReducer: personalReducer,
  skillsReducer: skillsReducer,
  covidReducer: covidReducer,
  aboutReducer: aboutReducer,
  applicationReducer: applicationReducer
})

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined
  }

  return reducers(state, action)
}

let appReducer = createStore(rootReducer, applyMiddleware(thunk))

export const resetState = () => ({
  type: RESET_STATE,
})

export default appReducer
