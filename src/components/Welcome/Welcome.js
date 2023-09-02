import React from 'react'
import styled from 'styled-components'

import StarsImage from '../../assets/stars.png'
import RocketImage from '../../assets/rocketman.png'
import { useNavigate } from 'react-router-dom'

const Welcome = ({ applications }) => {
  const navigate = useNavigate()
  const isAppsSubmited = applications?.length
  const onSubmited = () => {
    if (isAppsSubmited) return navigate('/applications')
  }
  const onStart = () => {
    navigate('/form')
  }
  return (
    <Layout>
      <Content>
        <WelcomeTitle>Welcome Rocketeer !</WelcomeTitle>
        <StartButton onClick={onStart}>Start Questionnaire</StartButton>
        <SubmitButton disabled={!isAppsSubmited} onClick={onSubmited}>
          Submitted Applications
        </SubmitButton>
        <RocketManImage src={RocketImage} />
      </Content>
      <StarsBackground src={StarsImage} />
    </Layout>
  )
}

export default Welcome

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(50% 50% at 50% 50%, #0c0d0e 0%, #151718 73.44%);
  position: relative;
  min-height: 100vh;
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
const WelcomeTitle = styled.h1`
  font-family: 'Rowdies', cursive;
  height: 212px;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fe3b1f;
  margin-bottom: 105px;
`
const StartButton = styled.button`
  border-radius: 50px;
  width: 394px;
  height: 80px;
  background: #fe3b1f;
  color: white;
  cursor: pointer;
  margin-bottom: 18px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
`
const SubmitButton = styled.button`
  width: 394px;
  height: 68px;
  font-size: 24px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
`

const RocketManImage = styled.img`
  width: 410px;
  box-sizing: border-box;
`
const StarsBackground = styled.img`
  position: fixed;
  width: 1920px;
  height: 1080px;
  left: 0px;
  top: 0px;
  z-index: 10;
`
