import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Thanks = () => {
  let navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  useEffect(() => {
    setTimeout(() => {
      handleBack()
    }, 3000)
  }, [])
  return (
    <Container>
      <Title>Thanks for Joining 😊</Title>
      <Background />
    </Container>
  )
}

export default Thanks
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const Title = styled.h1`
  height: 191px;
  font-family: Rowdies;
  font-weight: normal;
  font-size: 96px;
  line-height: 119px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fe3b1f;
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
