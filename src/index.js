import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import appReducer from './store/appReducer'

ReactDOM.render(
  <Provider store={appReducer}>
    <App />
  </Provider>,
  document.getElementById('root')
)
