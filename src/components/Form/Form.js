import React from 'react'
import styled from 'styled-components'

import PersonalContainer from '../Personal/PersonalContainer'
import SkillsContainer from '../Skills/SkillsContainer'
import CovidContainer from '../Covid/CovidContainer'
import AboutContainer from '../About/AboutContainer'
import SubmitContainer from '../Submit/SubmitContainer'

const Form = ({ page }) => {
  const currentPage = () => {
    switch (page) {
      case 1:
        return <PersonalContainer />
        break
      case 2:
        return <SkillsContainer />
        break
      case 3:
        return <CovidContainer />
        break
      case 4:
        return <AboutContainer />
        break
      case 5:
        return <SubmitContainer />
        break
      default:
        break
    }
  }

  return (
    <>
      <FormLayout>
        <Header></Header>
        <Body>{currentPage()}</Body>
        <Footer></Footer>
      </FormLayout>
    </>
  )
}

export default Form

const FormLayout = styled.div``
const Header = styled.div``
const Body = styled.div``
const Footer = styled.div``
