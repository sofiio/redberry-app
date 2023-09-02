import React from 'react'
import styled from 'styled-components'
import { ReactComponent as RemoveIcon } from '../../assets/remove.svg'

const SkillsList = ({ data, onRemoveSkill }) => {
  return (
    <SkillsContainer>
      {data.map(({ skill, experience, id }) => (
        <SkillsLayout key={id}>
          <Skill>{skill}</Skill>
          <Year>Years of Experience: {experience}</Year>
          <IconContainer>
            <RemoveIcon onClick={() => onRemoveSkill(id)} />
          </IconContainer>
        </SkillsLayout>
      ))}
    </SkillsContainer>
  )
}

export default SkillsList

const SkillsContainer = styled.div`
  margin-top: 56px;
  width: 100%;
`
const SkillsLayout = styled.div`
  display: flex;
  border: 1px solid #525557;
  height: 52px;
  width: 100%;
  position: relative;
  padding: 0 180px 0 16px;
  font-family: Montserrat;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  &:not(last-child) {
    margin-bottom: 36px;
  }
`
const IconContainer = styled.div`
  position: absolute;
  right: 14px;
  cursor: pointer;
`

const Skill = styled.div``
const Year = styled.div``
