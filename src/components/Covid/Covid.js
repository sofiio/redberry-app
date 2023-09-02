import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { ReactComponent as CalendarIcon } from '../../assets/calendar.svg'
import FormError from '../Form/FormError'
import FormItem from '../Form/FormItem'
import PaginationContainer from '../Form/Pagination/PaginationContainer'

const Covid = ({
  workPreference,
  hadCovidAt,
  hadCovid,
  hadCovidHandler,
  hadCovidAtHandler,
  workPreferenceHandler,
  vaccinated,
  vaccinatedAt,
  vaccinatedHandler,
  vaccinatedAtHandler
}) => {
  const onWork = value => {
    workPreferenceHandler(value)
  }
  const onCovid = value => {
    const hadCovidContact = value === 'yes'
    hadCovidHandler(hadCovidContact)
    if (!hadCovidContact) return hadCovidAtHandler('')
  }
  const onCovidAt = value => {
    hadCovidAtHandler(value)
  }
  const onVaccinated = value => {
    const isVaccinated = value === 'yes'
    vaccinatedHandler(isVaccinated)
    if (!isVaccinated) return vaccinatedAtHandler('')
  }
  const onVaccinatedAt = value => {
    vaccinatedAtHandler(value)
  }

  return (
    <FormItem
      title='Covid Stuff'
      infoTitle='Redberry Covid Policies'
      infoDescription='As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales.'
      formBody={
        <CovidForm
          onWork={onWork}
          onCovid={onCovid}
          onCovidAt={onCovidAt}
          workPreference={workPreference}
          hadCovidAt={hadCovidAt}
          hadCovid={hadCovid}
          onVaccinated={onVaccinated}
          onVaccinatedAt={onVaccinatedAt}
          vaccinated={vaccinated}
          vaccinatedAt={vaccinatedAt}
        />
      }
    />
  )
}

const CovidForm = ({
  onWork,
  onCovid,
  onCovidAt,
  workPreference,
  hadCovidAt,
  hadCovid,
  vaccinated,
  vaccinatedAt,
  onVaccinated,
  onVaccinatedAt
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onChange', reValidateMode: 'onChange' })
  const isCovid = (hadCovid !== '' && hadCovidAt !== '') || !hadCovid
  const isVaccine = (vaccinated !== '' && vaccinatedAt !== '') || !vaccinated
  const isNotEmpty =
    workPreference !== '' &&
    isCovid &&
    isVaccine &&
    vaccinated !== '' &&
    hadCovid !== ''

  return (
    <>
      <Form id='covidForm' onSubmit={handleSubmit()}>
        <Container>
          <Question>how would you prefer to work?</Question>
          <Label>
            <Title>From Office</Title>
            <Input
              id='from_office'
              type='radio'
              value={workPreference}
              checked={workPreference === 'from_office'}
              {...register('workPreference1', {
                onChange: e => {
                  onWork(e.target.id)
                },
                required: true
              })}
            />
            <Span />
          </Label>
          <Label>
            <Title>From Home</Title>
            <Input
              id='from_home'
              type='radio'
              checked={workPreference === 'from_home'}
              value={workPreference}
              {...register('workPreference2', {
                onChange: e => {
                  onWork(e.target.id)
                }
              })}
            />
            <Span />
          </Label>
          <Label>
            <Title>Hybrid</Title>
            <Input
              id='hybrid'
              type='radio'
              checked={workPreference === 'hybrid'}
              value={workPreference}
              {...register('workPreference3', {
                onChange: e => {
                  onWork(e.target.id)
                }
              })}
            />
            <Span />
          </Label>
        </Container>
        <ErrorContainer>
          <FormError
            title={workPreference.length === 0 && 'workPreference1'}
            errors={errors}
            message='enter work Preference'
          />
        </ErrorContainer>
        <Container>
          <Question>Did you contact covid 19? :(</Question>
          <Label>
            <Title>Yes</Title>
            <Input
              id='yes'
              type='radio'
              checked={hadCovid && hadCovid !== ''}
              value={hadCovid}
              {...register('hadCovid1', {
                onChange: e => {
                  onCovid(e.target.id)
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
              checked={!hadCovid && hadCovid !== ''}
              value={hadCovid}
              {...register('hadCovid2', {
                onChange: e => {
                  onCovid(e.target.id)
                }
              })}
            />
            <Span />
          </Label>
          <ErrorContainer>
            <FormError
              title={hadCovid?.length === 0 && 'hadCovid1'}
              errors={errors}
              message='enter covid information'
            />
          </ErrorContainer>

          {hadCovid && (
            <>
              <Question>When?</Question>
              <DateLabel>
                <DateInput
                  id='hadCovidAt'
                  type='date'
                  value={hadCovidAt}
                  {...register('hadCovidAt', {
                    onChange: e => {
                      onCovidAt(e.target.value)
                    },
                    required: true
                  })}
                />
                <IconContainer>
                  <CalendarIcon />
                </IconContainer>
              </DateLabel>
              <ErrorContainer>
                <FormError
                  title={hadCovidAt?.length === 0 && 'hadCovidAt'}
                  errors={errors}
                  message='enter covid date'
                />
              </ErrorContainer>
            </>
          )}
        </Container>
        <Container>
          <Question>Have you been vaccinated?</Question>
          <Label>
            <Title>Yes</Title>
            <Input
              id='yes'
              type='radio'
              checked={vaccinated && vaccinated !== ''}
              value={vaccinated}
              {...register('vaccinated1', {
                onChange: e => {
                  onVaccinated(e.target.id)
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
              checked={!vaccinated && vaccinated !== ''}
              value={vaccinated}
              {...register('vaccinated2', {
                onChange: e => {
                  onVaccinated(e.target.id)
                }
              })}
            />
            <Span />
          </Label>
          <ErrorContainer>
            <FormError
              title={vaccinated?.length === 0 && 'vaccinated1'}
              errors={errors}
              message='enter vaccine information'
            />
          </ErrorContainer>

          {vaccinated && (
            <>
              <Question>When did you get your last covid vaccine?</Question>
              <DateLabel>
                <DateInput
                  id='vaccinatedAt'
                  type='date'
                  value={vaccinatedAt}
                  {...register('vaccinatedAt', {
                    onChange: e => {
                      onVaccinatedAt(e.target.value)
                    },
                    required: true
                  })}
                />
                <IconContainer>
                  <CalendarIcon />
                </IconContainer>
              </DateLabel>
              <ErrorContainer>
                <FormError
                  title='vaccinatedAt'
                  errors={errors}
                  message='enter vaccinated date'
                />
              </ErrorContainer>
            </>
          )}
        </Container>
      </Form>
      <PaginationContainer isValid={isNotEmpty} form='covidForm' />
    </>
  )
}

export default Covid
const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  flex-direction: column;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`
const Question = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  height: 52px;
  color: #000000;
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
const DateLabel = styled.label`
  display: flex;
  position: relative;
`
const DateInput = styled.input`
  border: 1px solid #525557;
  height: 52px;
  width: 100%;
  position: relative;
  padding: 0 56px;
  z-index: 100;
  margin-bottom: 24px;
  background-color: transparent;
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

  ::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`

const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 16px;
  z-index: 10;
`
const ErrorContainer = styled.div`
  position: absolute;
  width: 100%;
  top: -24px;
`
