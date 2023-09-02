import React from 'react'
import styled from 'styled-components'
import ApplicationsList from './ApplicationsList'

export const Applications = ({ data, checkedHandler, checked, skillsList }) => {
  const onChecked = id => {
    if (id !== checked.id) {
      let newCheckedData = {
        id: id,
        value: true
      }
      return checkedHandler(newCheckedData)
    }
    let checkedData = {
      id: id,
      value: !checked.value
    }
    checkedHandler(checkedData)
  }
  return (
    <Container>
      <Title>Submitted Applications</Title>
      {data.map((form, index) => (
        <ListContainer key={index}>
          <ApplicationsList
            data={form}
            skillsList={skillsList}
            id={index}
            onChecked={onChecked}
            checked={checked}
          />
        </ListContainer>
      ))}
      <Background />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
const Title = styled.h1`
  height: 100px;
  top: 94px;
  font-family: Rowdies;
  font-weight: bold;
  font-size: 56px;
  line-height: 70px;
  display: flex;
  align-items: center;
  letter-spacing: 0.11em;
  color: #ffffff;
  margin: 95px 0 55px 0;
  z-index: 100;
`

const ListContainer = styled.div`
  width: 1154px;
  z-index: 100;
`
