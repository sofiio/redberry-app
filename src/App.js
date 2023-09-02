import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from '../src/theme/GlobalStyles'
import ApplicaitionsContainer from './components/Applications/ApplicaitionsContainer'
import FormContainer from './components/Form/FormContainer'
import Thanks from './components/Thanks'
import WelcomeContainer from './components/Welcome/WelcomeContainer'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeContainer />}></Route>
          <Route path='/form' element={<FormContainer />} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path='/applications' element={<ApplicaitionsContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
