import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import FormError from '../Form/FormError'
import FormItem from '../Form/FormItem'
import PaginationContainer from '../Form/Pagination/PaginationContainer'

const About = ({
  organizeHandler,
  devtalkHandler,
  somethingSpecialHandler,
  organizeDevtalk,
  devtalkTopic,
  somethingSpecial
}) => {
  const onOrganize = value => {
    const isOrganize = value === 'yes'
    organizeHandler(isOrganize)
    if (!isOrganize) return devtalkHandler('')
  }
  const onDevtalk = value => {
    devtalkHandler(value)
  }
  const onSpecial = value => {
    somethingSpecialHandler(value)
  }

  return (
    <FormItem
      title='What about you?'
      infoTitle='Redberrian Insights'
      infoDescription='We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!'
      formBody={
        <AboutForm
          onOrganize={onOrganize}
          onDevtalk={onDevtalk}
          onSpecial={onSpecial}
          organizeDevtalk={organizeDevtalk}
          devtalkTopic={devtalkTopic}
          somethingSpecial={somethingSpecial}
        />
      }
    />
  )
}

const AboutForm = ({
  onOrganize,
  onDevtalk,
  onSpecial,
  organizeDevtalk,
  devtalkTopic,
  somethingSpecial
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange' })

  const isCovid =
    (organizeDevtalk !== '' && devtalkTopic !== '') || !organizeDevtalk
  const isNotEmpty = somethingSpecial !== '' && isCovid


  return (
    <>
      <Form id='personalForm' onSubmit={handleSubmit()}>
        <Container>
          <Question>
            Would you attend Devtalks and maybe also organize your own?
          </Question>
          <Label>
            <Title>Yes</Title>
            <Input
              id='yes'
              type='radio'
              checked={organizeDevtalk && organizeDevtalk !== ''}
              value={organizeDevtalk}
              {...register('organizeDevtalk1', {
                onChange: e => {
                  onOrganize(e.target.id)
                },
                required: true
              })}
            />
            <Span />
          </Label>
          <Label>
            <Title>No</Title>
            <Input
              id='no'
              type='radio'
              checked={!organizeDevtalk && organizeDevtalk !== ''}
              value={organizeDevtalk}
              {...register('organizeDevtalk2', {
                onChange: e => {
                  onOrganize(e.target.id)
                }
              })}
            />
            <Span />
          </Label>
          <FormError
            title={organizeDevtalk?.length === 0 && 'organizeDevtalk1'}
            errors={errors}
            message='Filed is required organizeDevtalk!'
          />
        </Container>
        <>
          {organizeDevtalk && (
            <Container>
              <Question>What would you speak about at Devtalk?</Question>
              <InputField
                type='textarea'
                placeholder='I would...'
                value={devtalkTopic}
                {...register('devtalkTopic', {
                  onChange: e => {
                    onDevtalk(e.target.value)
                  },
                  required: true,
                })}
              />
              <ErrorContainer>
                <FormError
                  title='devtalkTopic'
                  errors={errors}
                  message='Field is required!'
                />
              </ErrorContainer>
            </Container>
          )}
        </>
        <Container>
          <Question>Tell us something special</Question>
          <InputField
            type='textarea'
            placeholder='I...'
            value={somethingSpecial}
            {...register('somethingSpecial', {
              onChange: e => {
                onSpecial(e.target.value)
              },
              required: true,
            })}
          />
          <ErrorContainer>
            <FormError
              title='somethingSpecial'
              errors={errors}
              message='Field is required'
            />
          </ErrorContainer>
        </Container>
      </Form>
      <PaginationContainer isValid={isNotEmpty} form='personalForm' />
    </>
  )
}

export default About

const Container = styled.div`
  position: relative;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 36px;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`
const Question = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 32px;
`
const Title = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #000000;
`
const Label = styled.label`
  display: flex;
  height: 22px;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  input:checked ~ span:after {
    display: block;
  }
  &:hover input ~ span {
    border: 1px solid #fe3b1f;
  }
  input:active ~ span {
    background-color: #fe3b1f;
  }
  input:checked ~ span {
    /* background-color: black; */
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 2px;
    left: 2px;
    width: 4px;
    height: 4px;
    border: 1px solid #000000;
    border-radius: 50px;
  }
`

const Input = styled.input`
  visibility: hidden;
`
const Span = styled.span`
  position: absolute;
  top: 4.5px;
  left: 10px;
  height: 12px;
  width: 12px;
  border: 1px solid #000000;
  border-radius: 50px;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

const InputField = styled.textarea`
  border: 1px solid #525557;
  height: 120px;
  width: 100%;
  position: relative;
  padding: 24px;
  ::placeholder,
  ::-webkit-input-placeholder {
    padding: 24px 0 0 0;
    color: #727272;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 14px;
  }
  :-ms-input-placeholder {
    padding: 24px 0 0 0;
    color: #727272;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 14px;
  }
  &:focus {
    outline: none;
    border: 1px solid #fe3b1f;
  }
`

const ErrorContainer = styled.div`
  position: absolute;
  width: 100%;
  top: -26px;
  left: -10px;
`
