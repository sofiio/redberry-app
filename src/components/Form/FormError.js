import React from 'react'
import styled from 'styled-components'

const FormError = ({ title, errors, message }) => {
  return <>{errors[title] && <ErrorMessage>{message}</ErrorMessage>}</>
}

export default FormError

const ErrorMessage = styled.span`
  position: absolute;
  top: 60px;
  left: 10px;
  color: #fe3b1f;
  text-transform: capitalize;
  font-size: 14px;
`
