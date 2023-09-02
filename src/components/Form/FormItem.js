import React from 'react'
import styled from 'styled-components'

const FormItem = ({ title, formBody, infoTitle, infoDescription }) => {
  return (
    <FormItemLayout>
      <FormLayout>
        <Form>
          <Header>{title}</Header>
          <Body>{formBody}</Body>
          <Footer>{/* <PaginationContainer /> */}</Footer>
        </Form>
      </FormLayout>
      <InformationLayout>
        <Information>
          <Title>{infoTitle}</Title>
          <Description>{infoDescription}</Description>
        </Information>
        <Background />
      </InformationLayout>
    </FormItemLayout>
  )
}

export default FormItem

const FormItemLayout = styled.div`
  display: flex;
  flex-direction: row;
`
const FormLayout = styled.div`
  width: 50vw;
`
const Form = styled.div`
  padding: 130px 100px 156px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InformationLayout = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  color: white;
`
const Information = styled.div`
  position: relative;
  z-index: 100;
`
const Background = styled.div`
  top: 0;
  right: 0;
  position: fixed;
  background: radial-gradient(50% 50% at 50% 50%, #0c0d0e 0%, #151718 73.44%);
  width: 50vw;
  height: 100%;
  z-index: 10;
`

const Header = styled.h1`
  font-family: 'Rowdies', cursive;
  font-size: 64px;
  line-height: 80px;
  font-weight: normal;
  align-items: center;
  text-align: center;
  color: #fe3b1f;
  margin-bottom: 130px;
`
const Body = styled.div`
  width: 456px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Footer = styled.div`
  display: flex;
  margin-top: 174px;
`
const Title = styled.h1`
  padding: 130px 54px 130px 176px;
  font-family: 'Rowdies', cursive;
  font-size: 64px;
  line-height: 80px;
  font-weight: normal;
  align-items: center;
  text-align: left;
  color: #fe3b1f;
`
const Description = styled.div`
  padding: 0 124px 0 176px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 200%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
`
