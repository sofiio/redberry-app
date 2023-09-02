import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import FormError from '../Form/FormError'
import FormItem from '../Form/FormItem'
import PaginationContainer from '../Form/Pagination/PaginationContainer'

const Personal = ({ formData, formDataHandler }) => {
  const onFieldChange = (event, fieldKey) => {
    const fieldValue = event.target.value
    if (fieldKey === 'phone') {
      let phoneNumber = fieldValue.replace('+995 5', '')
      if (event.target.value.length < 7) {
        return formDataHandler('', fieldKey)
      }
      return formDataHandler(phoneNumber, fieldKey)
    }
    formDataHandler(fieldValue, fieldKey)
  }
  return (
    <FormItem
      title='Hey, Rocketeer, what are your coordinates?'
      infoTitle='Redberry Origins'
      infoDescription='You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇'
      formBody={
        <PersonalForm formData={formData} onFieldChange={onFieldChange} />
      }
    />
  )
}

const PersonalForm = ({ formData, onFieldChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange' })
  const countryCode = '+995 5'
  return (
    <>
      <Form id='personalForm' onSubmit={handleSubmit()}>
        <FieldContainer>
          <Input
            type='text'
            placeholder='First Name'
            value={formData?.firstName}
            {...register('firstName', {
              onChange: e => {
                onFieldChange(e, 'firstName')
              },
              required: true,
              minLength: 2
            })}
          />
          <FormError
            title='firstName'
            errors={errors}
            message='enter first name (more than 2 letters)'
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type='text'
            placeholder='Last Name'
            value={formData?.lastName}
            {...register('lastName', {
              onChange: e => {
                onFieldChange(e, 'lastName')
              },
              required: true,
              minLength: 2
            })}
          />
          <FormError
            title='lastName'
            errors={errors}
            message='enter last name (more than 2 letters)'
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type='text'
            placeholder='E Mail'
            value={formData?.email}
            {...register('email', {
              onChange: e => {
                onFieldChange(e, 'email')
              },
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          <FormError
            title='email'
            errors={errors}
            message='wrong email format'
          />
        </FieldContainer>
        <FieldContainer>
          <Input
            type='tel'
            placeholder='Phone'
            value={`${countryCode}${formData?.phone}`}
            {...register('phone', {
              onChange: e => {
                onFieldChange(e, 'phone')
              },
              required: false,
              minLength: 2,
              maxLenght: 14,
              pattern: /^\+995 5\d{8}$/
            })}
          />
          <FormError
            title='phone'
            errors={errors}
            message='enter phone in this format (+995 555443322)'
          />
        </FieldContainer>
      </Form>
      <PaginationContainer isValid={isValid} form='personalForm' />
    </>
  )
}

export default Personal

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 36px;
  }
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
