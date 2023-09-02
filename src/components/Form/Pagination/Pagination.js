import React from 'react'
import styled from 'styled-components'
import { ReactComponent as PrevIcon } from '../../../assets/prev.svg'
import { ReactComponent as NextIcon } from '../../../assets/next.svg'
import { useNavigate } from 'react-router-dom'

const Pagination = ({
  totalPages,
  page,
  nextButtonHandler,
  prevButtonHandler,
  pageHandler,
  isValid,
  form
}) => {
  const navigate = useNavigate()

  const onNextButton = () => {
    if (isValid) return nextButtonHandler()
  }

  const onPrevButton = () => {
    if (page === 1) return navigate('/')
    prevButtonHandler()
  }

  const pagesCount = []
  for (let i = 1; i <= totalPages; i++) {
    pagesCount.push(i)
  }

  const paginationHandler = pageValue => {
    const isPageValid = pageValue <= page || (pageValue - page === 1 && isValid)
    if (isPageValid) return pageHandler(pageValue)
  }

  return (
    <PaginationContainer>
      <PrevButton onClick={onPrevButton}>
        <PrevIcon />
      </PrevButton>
      <PaginationLayout>
        {pagesCount.map(pageNumber => (
          <PaginationItem
            disabled={pageNumber === page}
            key={pageNumber}
            onClick={() => paginationHandler(pageNumber)}>
            {page === pageNumber ? (
              <PageActive key={pageNumber} />
            ) : pageNumber < page ? (
              <PageCompleted key={pageNumber} />
            ) : (
              <Page key={pageNumber} />
            )}
          </PaginationItem>
        ))}
      </PaginationLayout>
      <NextButton disabled={totalPages === page} onClick={onNextButton} type='submit' form={form}>
        <NextIcon />
      </NextButton>
    </PaginationContainer>
  )
}

export default Pagination

const NextButton = styled.button`
  margin: 0 10px;
  cursor: pointer;
`
const PrevButton = styled.button`
  margin: 0 10px;
  cursor: pointer;
`
const PaginationContainer = styled.div`
  margin-top: 170px;
  display: flex;
`
const PaginationLayout = styled.div``
const PaginationItem = styled.button``
const Page = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50rem;
  background: #fe3b1f;
  opacity: 0.1;
  margin: 0 10px;
`
const PageActive = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fe3b1f;
  cursor: pointer;
  border-radius: 50rem;
  margin: 0 10px;
`
const PageCompleted = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: #fe3b1f;
  border-radius: 50rem;
  margin: 0 10px;
`
