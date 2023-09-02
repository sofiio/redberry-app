import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Submit = ({
  pageHandler,
  page,
  submitHandler,
  personalData,
  skillsData,
  workPreference,
  hadCovid,
  hadCovidAt,
  vaccinated,
  vaccinatedAt,
  organizeDevtalk,
  devtalkTopic,
  somethingSpecial,
  resetDataHandler
}) => {
  let navigate = useNavigate()
  const token = `ca513714-3eb1-4441-9362-4c0c5d4f4b02`
  const countryCode = '+9955'
  const skills = skillsData.map(skill => {
    return {
      id: skill.id,
      experience: skill.experience
    }
  })
  const applicationData = {
    token: token,
    first_name: personalData.firstName,
    last_name: personalData.lastName,
    email: personalData.email,
    phone: `${countryCode}${personalData.phone}`,
    skills: skills,
    work_preference: workPreference,
    had_covid: hadCovid,
    had_covid_at: hadCovidAt,
    vaccinated: vaccinated,
    vaccinated_at: vaccinatedAt,
    will_organize_devtalk: organizeDevtalk,
    devtalk_topic: devtalkTopic,
    something_special: somethingSpecial
  }

  // Check if form application includes empty fields
  const cleanApplication = obj => {
    for (let key in obj) {
      if (obj[key].length === 0) {
        delete obj[key]
      }
    }
    return obj
  }

  const onSubmit = () => {
    const cleanData = cleanApplication(applicationData)
    submitHandler(cleanData)
    navigate('/thanks')
    resetDataHandler()
  }
  const onBack = () => {
    pageHandler(page - 1)
  }
  return (
    <>
      <Container>
        <ButtonsContainer>
          <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
          <BackButton onClick={onBack}>go back</BackButton>
        </ButtonsContainer>
      </Container>
      <Background />
    </>
  )
}

export default Submit

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const SubmitButton = styled.button`
  position: relative;
  width: 394px;
  height: 90px;
  background: #fe3b1f;
  border-radius: 50px;
  font-family: Montserrat;
  font-weight: normal;
  font-size: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 100;
`

const BackButton = styled.button`
  position: relative;
  width: 394px;
  height: 50px;
  font-family: Montserrat;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;
  margin-top: 34px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #0c0d0e 0%, #151718 73.44%);
  z-index: 10;
`
