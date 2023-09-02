import React from 'react'
import styled from 'styled-components'

import { ReactComponent as DateIcon } from '../../assets/calendar.svg'
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg'

const ApplicationsList = ({ data, skillsList, id, onChecked, checked }) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    skills,
    work_preference,
    had_covid,
    had_covid_at,
    vaccinated,
    vaccinated_at,
    will_organize_devtalk,
    devtalk_topic,
    something_special
  } = data
  const isOpen = checked.id === id + 1 && checked.value
  return (
    <FormContainer>
      <Header
        onClick={() => onChecked(id + 1)}
        style={{ backgroundColor: isOpen && '#F05039' }}>
        <HeaderNumber>{id + 1}</HeaderNumber>{' '}
        <span style={{ transform: isOpen && 'rotate(180deg)' }}>
          <ArrowIcon />
        </span>
      </Header>
      <Body style={{ display: isOpen && 'inline-block' }}>
        <BodyTop>
          <BodyContainer>
            <Title>Personal Information</Title>
            <PersonalItem>
              <span>First Name</span>
              {first_name}
            </PersonalItem>
            <PersonalItem>
              <span>Last Name</span>
              {last_name}
            </PersonalItem>
            <PersonalItem>
              <span>E Mail</span>
              {email}
            </PersonalItem>
            <PersonalItem>
              <span>Phone</span>
              {phone}
            </PersonalItem>
          </BodyContainer>
          <BodyContainer>
            <Title>Skillset</Title>
            {skills.map(item => (
              <SkillsItem key={item.id}>
                <span key={item.id}>
                  {skillsList.map(e => (
                    <div key={e.id}>{item.id === e.id && e.title}</div>
                  ))}
                </span>
                Years of Experience: {item.experience}
              </SkillsItem>
            ))}
          </BodyContainer>
        </BodyTop>
        <BodyContainer>
          <Title> Covid Situation</Title>
          <Item>
            <ItemContainer>
              <SubTitle>how would you prefer to work?</SubTitle>
              <Field>
                {work_preference === 'from_office' ? (
                  <RadioBtnChecked />
                ) : (
                  <RadioBtn />
                )}
                <span>From Sairme Office</span>
              </Field>
              <Field>
                {work_preference === 'from_home' ? (
                  <RadioBtnChecked />
                ) : (
                  <RadioBtn />
                )}
                <span>From Home</span>
              </Field>
              <Field>
                {work_preference === 'hybrid' ? (
                  <RadioBtnChecked />
                ) : (
                  <RadioBtn />
                )}
                <span>Hybrid</span>
              </Field>
            </ItemContainer>
            <ItemContainer>
              <SubTitle>Did you have covid 19?</SubTitle>
              <Field>
                {had_covid ? <RadioBtnChecked /> : <RadioBtn />}
                <span>Yes</span>
              </Field>
              <Field>
                {!had_covid ? <RadioBtnChecked /> : <RadioBtn />}
                <span>No</span>
              </Field>
            </ItemContainer>
            {had_covid && (
              <ItemContainer>
                <SubTitle>When did you have covid 19?</SubTitle>
                <FieldDate>
                  {had_covid_at}
                  <Icon>
                    <DateIcon />
                  </Icon>
                </FieldDate>
              </ItemContainer>
            )}

            <ItemContainer>
              <SubTitle>Have you been vaccinated?</SubTitle>
              <Field>
                {vaccinated ? <RadioBtnChecked /> : <RadioBtn />}
                <span>Yes</span>
              </Field>
              <Field>
                {!vaccinated ? <RadioBtnChecked /> : <RadioBtn />}
                <span>No</span>
              </Field>
            </ItemContainer>
            {vaccinated && (
              <ItemContainer>
                <SubTitle>When did you get covid vaccine?</SubTitle>
                <FieldDate>
                  {vaccinated_at}
                  <Icon>
                    <DateIcon />
                  </Icon>
                </FieldDate>
              </ItemContainer>
            )}
          </Item>
        </BodyContainer>
        <BodyContainer>
          <Title>Insigts</Title>
          <Item>
            <ItemContainer>
              <SubTitle>
                Would you attend Devtalks and maybe also organize your own?
              </SubTitle>
              <Field>
                {will_organize_devtalk ? <RadioBtnChecked /> : <RadioBtn />}
                <span>Yes</span>
              </Field>
              <Field>
                {!will_organize_devtalk ? <RadioBtnChecked /> : <RadioBtn />}
                <span>No</span>
              </Field>
            </ItemContainer>
            {will_organize_devtalk && (
              <ItemContainer>
                <SubTitle>What would you speak about at Devtalk?</SubTitle>
                <FieldText>{devtalk_topic}</FieldText>
              </ItemContainer>
            )}
            <ItemContainer>
              <SubTitle>Tell us somthing special</SubTitle>
              <FieldText>{something_special}</FieldText>
            </ItemContainer>
          </Item>
        </BodyContainer>
      </Body>
    </FormContainer>
  )
}

export default ApplicationsList

const FormContainer = styled.div`
  margin-bottom: 10px;
  background-color: #fff;
`
const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px 0 12px;
  height: 52px;
  background: #fe3b1f;
`
const HeaderNumber = styled.div`
  width: 46px;
  height: 20px;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`
const Body = styled.div`
  display: none;
  padding: 36px 80px 200px 160px;
  background-color: #ffffff;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  width: 50%;
`
const BodyTop = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 90px;
`
const Title = styled.h2`
  height: 36px;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #fe3b1f;
`

const Item = styled.div``
const ItemContainer = styled.div`
  margin-bottom: 58px;
`

const RadioBtnChecked = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #0c0d0e;
  border-radius: 50rem;
  position: relative;
  ::after {
    border: 1px solid #0c0d0e;
    width: 4px;
    height: 4px;
    content: '';
    position: absolute;
    border-radius: 50rem;
    top: 2px;
    left: 2px;
  }
`
const RadioBtn = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #0c0d0e;
  border-radius: 50rem;
  position: relative;
`
const Field = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  span {
    margin-left: 6px;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
  }
`
const FieldDate = styled.div`
  width: 348px;
  height: 54px;
  border: 1px solid #525557;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 56px;
  position: relative;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  color: #454545;
`
const FieldText = styled.div`
  width: 447px;
  min-height: 122px;
  border: 1px solid #525557;
  box-sizing: border-box;
  padding: 24px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  display: flex;

  color: #3a3a3a;
`
const Icon = styled.div`
  position: absolute;
  right: 20px;
`

const SubTitle = styled.h4`
  height: 52px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
`

const PersonalItem = styled.div`
  display: flex;
  height: 54px;
  align-items: center;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  color: #454545;
  span {
    width: 102px;
    left: 506px;
    top: 554px;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`
const SkillsItem = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  color: #454545;
  span {
    width: 102px;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`
