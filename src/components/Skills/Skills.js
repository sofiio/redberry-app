import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { ReactComponent as ArrowIcon } from '../../assets/arrowDown.svg'
import FormError from '../Form/FormError'
import FormItem from '../Form/FormItem'
import PaginationContainer from '../Form/Pagination/PaginationContainer'
import SkillsList from './SkillsList'

const Skills = ({
  selectedValue,
  selectedValueHandler,
  experience,
  yearHandler,
  selectedSkills,
  addSkillHandler,
  removeSkillHandle,
  skills
}) => {
  const onSelectChange = e => {
    const value = e.target.value.substring(1)
    let id = Number(e.target.value.substring(0, 1))
    selectedValueHandler(value, id)
  }
  const onYearChange = e => {
    const value = e.target.value
    yearHandler(value)
  }

  const onAddSkill = (e, selectedValue, experience) => {
    const yearTo = Number(experience)
    e.preventDefault()
    // const lastItem = selectedSkills[selectedSkills.length - 1]
    // const newId = selectedSkills.length > 0 ? lastItem.id + 1 : 0
    const newSkill = {
      id: selectedValue.id,
      skill: selectedValue.value,
      experience: yearTo
    }
    addSkillHandler(newSkill)
  }
  const onRemoveSkill = id => {
    removeSkillHandle(id)
  }

  return (
    <FormItem
      title='Tell us about your skills'
      infoTitle='A bit about our battles'
      infoDescription='
      As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.'
      formBody={
        <SkillsForm
          onSelectChange={onSelectChange}
          selectedValue={selectedValue}
          experience={experience}
          onYearChange={onYearChange}
          onAddSkill={onAddSkill}
          selectedSkills={selectedSkills}
          onRemoveSkill={onRemoveSkill}
          skillsData={skills}
        />
      }
    />
  )
}

const SkillsForm = ({
  onSelectChange,
  selectedValue,
  experience,
  onYearChange,
  onAddSkill,
  selectedSkills,
  onRemoveSkill,
  skillsData
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange' })

  const isFields = selectedValue?.value !== '' && experience.length > 0
  const isSkillAdded = selectedSkills.some(
    item => item.skill === selectedValue.value
  )
  const isSkillSubmited = selectedSkills.length > 0
  const isEmpty = isValid || isSkillSubmited

  return (
    <>
      <Form id='skillsForm' onSubmit={handleSubmit()}>
        <Container>
          <Label>
            <ArrowIcon />
          </Label>
          <Select
            {...register('skills', {
              onChange: e => {
                onSelectChange(e)
              },
              required: true
            })}>
            <option value=''>Skills</option>
            {skillsData.map(item => (
              <option key={item.id} value={`${item.id}${item.title}`}>
                {item.title}
              </option>
            ))}
          </Select>
          <FormError title='skills' errors={errors} message='enter skill' />
        </Container>
        <Container>
          <Input
            type='number'
            placeholder='Experience Duration in Years'
            value={experience}
            {...register('year', {
              onChange: e => {
                onYearChange(e)
              },
              required: true
            })}
          />

          <FormError
            title='year'
            errors={errors}
            message='enter year (only numbers)'
          />
        </Container>

        <ButtonContainer>
          <Button
            disabled={!isFields || isSkillAdded}
            onClick={e => onAddSkill(e, selectedValue, experience)}>
            Add Programming Language
          </Button>
        </ButtonContainer>
      </Form>

      <SkillsList data={selectedSkills} onRemoveSkill={onRemoveSkill} />

      <PaginationContainer
        isValid={isEmpty && isSkillSubmited}
        form={isSkillSubmited ? 'submited' : 'skillsForm'}
      />
    </>
  )
}

export default Skills

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 36px;
  }
`
const Select = styled.select`
  border: 1px solid #525557;
  height: 52px;
  width: 100%;
  position: relative;
  padding: 0 56px;
  color: #454545;
  font-family: Montserrat;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`
const Input = styled.input`
  border: 1px solid #525557;
  height: 52px;
  width: 100%;
  position: relative;
  padding: 0 56px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #727272;
    font-family: Montserrat;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
  }
  :-ms-input-placeholder {
    color: #727272;
    font-family: Montserrat;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border: 1px solid #fe3b1f;
  }
`

const ButtonContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-top: -14px;
`

const Button = styled.button`
  width: 201px;
  height: 32px;
  background-color: #fe3b1f;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
`
const Label = styled.label`
  position: absolute;
  right: 22px;
  top: 14px;
  z-index: 10;
`
